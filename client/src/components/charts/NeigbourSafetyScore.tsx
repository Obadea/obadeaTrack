import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowCircleUpRounded from "@mui/icons-material/ArrowCircleUpRounded";

// import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const NeigbourSafetyScore = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      minWidth="62%"
    >
      <Stack display="flex" justifyContent={"space-between"} direction="row">
        <Typography fontSize={18} fontWeight={600} color="#11142d">
          Neighborhood Safety Scores
        </Typography>

        <Stack direction="row" alignItems="center" gap={1} mb="30px">
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.9%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default NeigbourSafetyScore;
