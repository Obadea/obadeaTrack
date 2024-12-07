import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import { PropertyCardProps } from "interfaces/property";
// import { useState } from 'react';
import { useCreate } from "@refinedev/core";
import { Map, Marker } from "pigeon-maps";
import { formatToNaira } from "utils/helperFunctions";
import { CardActionArea, CardHeader, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  useUpdate,
  useShow,
  useNotification,
  useGetIdentity,
} from "@refinedev/core";
import { useEffect } from "react";

// const { queryResult } = useShow();
// const { data } = queryResult;

// const propertyDetails = data?.data ?? {};

const locationConverter = async (city: any) => {
  const url = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "28464102e2msh39263d3df4455bbp1f8bb7jsn00e581eeb154",
      "X-RapidAPI-Host": "geocoding-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // const coords: any = [[result[0].latitude, result[0].longitude]];
    // setResponseData(coords);
    // console.log(coords);
    // console.log('heyy');
    return result;
  } catch (error) {
    console.error(error);
  }
};

locationConverter("Nigeria");
// const langlong

// setTimeout(() => {
//   console.log(result2);
// }, 4000);

const RenderMap = async () => {
  return (
    <Stack>
      <Map height={300} defaultCenter={[20, 20]} defaultZoom={6}>
        <Marker width={50} anchor={[20, 20]} />
      </Map>
    </Stack>
  );
};
const PropertyCard = ({
  id,
  title,
  location,
  price,
  photo,
  savedProperty,
}: PropertyCardProps) => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });

  const { mutate } = useCreate();

  const handleSaveProperty = () => {
    const reqData = {
      propertyId: id,
      email: user.email,
      title,
      location,
      price,
      photo,
    };

    mutate(
      {
        resource: "savedProperties",
        values: reqData,
      },
      {
        onError: (error) => {
          console.error("Error creating property:", error);
        },
      }
    );
  };

  return (
    <Card
      onClick={() => {}}
      // component={Link}
      // to={`/properties/show/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        borderRadius: "16px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardHeader
        sx={{ background: "transparent", position: "absolute", zIndex: "20" }}
        action={
          <IconButton
            onClick={handleSaveProperty}
            aria-label="like"
            sx={{ background: "#fff" }}
          >
            <BookmarkIcon
              sx={{
                color: `${
                  savedProperty?.includes(`${id}`) ? "red" : "transparent"
                }`,
                stroke: "#000",
              }}
            />
          </IconButton>
        }
      />
      <CardActionArea>
        <Link to={`/properties/show/${id}`}>
          <CardMedia
            component="img"
            width="100%"
            height={210}
            image={photo}
            alt="card image"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
              paddingX: "5px",
            }}
          >
            <Stack direction="column" gap={1}>
              <Typography
                fontSize={16}
                fontWeight={500}
                color="#11142d"
                width={150}
                noWrap
              >
                {title}
              </Typography>
              <Stack direction="row" gap={0.5} alignItems="flex-start">
                <Place
                  sx={{
                    fontSize: 18,
                    color: "#11142d",
                  }}
                />
                <Typography fontSize={14} color="#808191">
                  {location}
                </Typography>
              </Stack>
            </Stack>
            <Box
              px={1.5}
              py={0.5}
              borderRadius={1}
              bgcolor="#dadefa"
              height="fit-content"
            >
              <Typography fontSize={12} fontWeight={600} color="#475be8">
                {formatToNaira(Number(price))}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PropertyCard;
