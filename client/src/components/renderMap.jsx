import { Stack, Typography } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import { useState, useEffect } from 'react';

import { useShow } from '@refinedev/core';
import { Error } from '@mui/icons-material';

const RenderMap = () => {
  const [responseData, setResponseData] = useState(null);

  const { queryResult } = useShow();
  const { data } = queryResult;
  const propertyDetails = data?.data ?? {};

  useEffect(() => {
    const LocationConverter = async (city) => {
      try {
        const url = `https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?city=${city}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '03ca7dce48mshf2ed975fd0aa721p1f4eecjsn0fad6c832c38',
            'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error('Network response was not ok, Map load Fail');
        }
        const jsonData = await response.json();
        setResponseData(jsonData);
      } catch (error) {
        console.error(error);
        throw new Error('Map load fail');
      }
    };
    LocationConverter(propertyDetails.location);
  }, []);

  return (
    <Stack>
      {responseData ? (
        <Map
          height={306}
          defaultCenter={[responseData[0].longitude, responseData[0].latitude]}
          defaultZoom={5}
        >
          <Marker
            width={70}
            anchor={[responseData[0].longitude, responseData[0].latitude]}
          />
        </Map>
      ) : (
        <Typography>Loading map...</Typography>
      )}
    </Stack>
  );
};

export default RenderMap;
