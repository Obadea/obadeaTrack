import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { propertyReferralsInfo } from "../../constants/index";
import { Avatar } from "@mui/material";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor="#e4e8ef"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
      />
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Box
      p={4}
      pb={1}
      bgcolor="#fcfcfc"
      id="chart"
      // minWidth={490}
      minWidth="35%"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Notifications
      </Typography>

      <Stack my="20px" direction="column" gap={4} justifyContent="center">
        {propertyReferralsInfo.map((info, idx) => (
          <Stack
            key={idx}
            display="grid"
            gridTemplateColumns="0.1fr 1.5fr"
            direction="row"
            gap={2}
          >
            {info.avatar ? (
              <Avatar alt={info.time} src={info.avatar} />
            ) : (
              <div
                style={{
                  background: "#0000ff2e",
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  alignItems: "center",
                  margin: "0",
                  padding: "0",
                  justifyContent: "center",
                }}
              >
                {info.icon}
              </div>
            )}
            <Stack>
              <Typography fontSize={13} fontWeight={600}>
                {info.title}
              </Typography>
              <Typography fontSize={10} fontWeight={400} color="#11143d">
                {info.time}
              </Typography>
            </Stack>
          </Stack>
        ))}
        <Typography
          fontSize={14}
          fontWeight={600}
          color="blue"
          sx={{ cursor: "pointer" }}
        >
          View All Notifications
        </Typography>
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
