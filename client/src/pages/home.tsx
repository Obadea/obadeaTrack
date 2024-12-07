import { useGetIdentity, useList, useOne } from "@refinedev/core";
// import { useList } from '@pankod/refine-core';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

// import { Typography, Box, Stack } from '@pankod/refine-mui';

import {
  PieChart,
  PropertyReferrals,
  PropertyCard,
  TopAgent,
} from "components";
import NeigbourSafetyScore from "components/charts/NeigbourSafetyScore";
import { PropertyProps } from "interfaces/common";
import LoadingSvg from "components/loadingSvg";

const Home = () => {
  // const {
  //   data: propertiesData,
  //   isLoading: propertyIsLoading,
  //   isError: propertyIsError,
  // } = useList({
  //   resource: "properties",
  //   // resource: "properties",
  //   // config: {
  //   //   pagination: {
  //   //     pageSize: 10,
  //   //   },
  //   // },
  // });

  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <LoadingSvg />;
  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Luxury Apartments"
          value="40%"
          series={[60, 40]}
          colors={["#b4c0cb", "#475be8"]}
        />
        <PieChart
          title="Shared Apartments"
          value="30%"
          series={[70, 30]}
          colors={["#b4c0cb", "#FD8539"]}
        />
        <PieChart
          title="Single Rooms"
          value="30%"
          series={[70, 30]}
          colors={["#b4c0cb", "#2ED480"]}
        />
        <PieChart
          title="Studios Rooms"
          value="20%"
          series={[80, 20]}
          colors={["#b4c0cb", "#FE6D8E"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        // display="gr  id"
        // gridTemplateColumns="1.5fr 1fr"
        direction={{ xs: "column", lg: "row" }}
        // gridTemplateColumns={{ xs: "1.5fr 1fr", lg: "1fr" }}
        gap={4}
      >
        <NeigbourSafetyScore />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Saved Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {myProfile?.savedProperties?.map((property: PropertyProps) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
              savedProperty={property?._id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
