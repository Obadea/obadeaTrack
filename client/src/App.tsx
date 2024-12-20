import React from "react";

import { redirect, useRoutes } from "react-router-dom";

import {
  GitHubBanner,
  Refine,
  LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  ReadyPage,
  ErrorComponent,
} from "@refinedev/mui";

import { NotificationProvider } from "@refinedev/core";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, { AxiosRequestConfig } from "axios";
import { Title, Sider, Layout, Header } from "./components/layout";
import { ColorModeContext, ColorModeContextProvider } from "./contexts";
import { CredentialResponse } from "./interfaces/google";
import { parseJwt } from "./utils/parse-jwt";

import {
  Login,
  Home,
  Agents,
  MyProfile,
  PropertyDetails,
  AllProperties,
  CreateProperty,
  AgentProfile,
  EditProperty,
} from "./pages";
import { Box, PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import Message from "pages/message";
import RentedProperties from "pages/rentedProperties";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  // const navigate = useRoutes();

  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      // Save user to MongoDB
      if (profileObj) {
        const response = await fetch(
          "https://obadeatrack.onrender.com/api/v1/users",
          // "http://localhost:8080/api/v1/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: profileObj.name,
              email: profileObj.email,
              avatar: profileObj.picture,
            }),
          }
        );

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            })
          );
        } else {
          return Promise.reject();
        }
      }
      localStorage.setItem("token", `${credential}`);

      return Promise.resolve("/").then((url) => {
        window.location.href = url;
      });
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve("/pages/login").then((url) => {
        window.location.href = url;
      });
    },

    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: async () => null,
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#9c27b0",
      },
      secondary: {
        main: "#f44336",
      },
      background: {
        default: "#e8eaf6",
      },
    },
  });

  return (
    // <ColorModeContextProvider>
    <ColorModeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: { WebkitFontSmoothing: "auto" },
          }}
        />
        <RefineSnackbarProvider>
          <Refine
            dataProvider={dataProvider(
              // "http://localhost:8080/api/v1"
              "https://obadeatrack.onrender.com/api/v1"
            )}
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
              {
                name: "properties",
                list: AllProperties,
                show: PropertyDetails,
                create: CreateProperty,
                edit: EditProperty,
                icon: <VillaOutlined />,
              },
              {
                name: "agents",
                list: Agents,
                show: AgentProfile,
                icon: <PeopleAltOutlined />,
              },
              {
                name: "reviews",
                list: RentedProperties,
                icon: <StarOutlineRounded />,
              },
              {
                name: "messages",
                list: Message,
                icon: <ChatBubbleOutline />,
              },
              {
                name: "my-profile",
                options: { label: "My Profile " },
                list: MyProfile,
                icon: <AccountCircleOutlined />,
              },
            ]}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            legacyRouterProvider={routerProvider}
            legacyAuthProvider={authProvider}
            LoginPage={Login}
            DashboardPage={Home}
          />
        </RefineSnackbarProvider>
      </ThemeProvider>
    </ColorModeContextProvider>
  );
}

export default App;
