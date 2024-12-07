import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface Props {
  title: string;
  amount: number | string;
  percentage?: number;
}

const RentedCMRCard = ({ title, amount, percentage }: Props) => {
  return (
    <Box
      id="CRM"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3}
      py={3}
      pr={2}
      gap={4}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} fontWeight={500}>
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={700} marginTop={1}>
          {amount}
        </Typography>
      </Stack>

      <Stack display="flex" alignItems="flex-end">
        <IconButton size="small">
          <MoreVertIcon sx={{ fontSize: "18px" }} />
        </IconButton>

        {percentage ? (
          <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={0.4}
            sx={{
              background: "#e6e4e45f",
              borderRadius: "20px",
              padding: "2px 5px",
              marginTop: "8px",
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: "12px" }} />
            <Typography fontSize={11}>{percentage}%</Typography>
          </Stack>
        ) : (
          <AvatarGroup sx={{ marginTop: "4px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Travis Howard"
              src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Cindy Baker"
              src="https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png"
              sx={{ width: 24, height: 24 }}
            />
            <Avatar
              alt="Agnes Walker"
              src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png"
              sx={{ width: 24, height: 24 }}
            />
          </AvatarGroup>
        )}
      </Stack>
    </Box>
  );
};

export default RentedCMRCard;
