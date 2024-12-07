import React from "react";
import { useGetIdentity } from "@refinedev/core";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleIcon from "@mui/icons-material/Circle";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#fcfcfc" }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          {showUserInfo && (
            <>
              <Stack direction="row" gap="12px" alignItems="center">
                <div className="notification-box">
                  <CircleIcon
                    color="secondary"
                    sx={{
                      fontSize: 10,
                      position: "absolute",
                      top: "7px",
                      right: "8px",
                    }}
                  />
                  <NotificationsIcon />
                </div>
                {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
                {user.name && (
                  <Stack display="flex" direction="column">
                    <Typography variant="subtitle2">{user?.name}</Typography>
                    <Typography fontSize={10}>{user?.email}</Typography>
                  </Stack>
                )}
              </Stack>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
