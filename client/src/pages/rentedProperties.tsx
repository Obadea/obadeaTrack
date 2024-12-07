import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import RentedCMRCard from "components/common/rentedCMRCard";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { rentedPropertiesData } from "constants/index";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const RentedProperties = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box minWidth="900px">
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <RentedCMRCard title="Total Tenant" amount="2,450" percentage={20} />
        <RentedCMRCard
          title="Total Properties"
          amount="2,450"
          percentage={12}
        />
        <RentedCMRCard title="Members" amount="509" />
      </Box>

      <Box
        sx={{
          border: "1px solid #bdbcbc",
          padding: "0 10px ",
          marginTop: "20px",
          borderRadius: "15px",
          flexDirection: "row",
          background: "#fff",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        display="flex"
      >
        <Input
          id="input-with-icon-adornment"
          disableUnderline
          sx={{
            borderRadius: "12px",
            border: "1px solid #bdbcbc",
            padding: "5px 10px",
            margin: "14px 0",
            width: "30%",
            background: "#fff",
          }}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          size="small"
          sx={{
            height: "45px",
            background: "blue",
            borderRadius: "10px",
          }}
          variant="contained"
          startIcon={<AddIcon />}
        >
          New Application
        </Button>{" "}
      </Box>
      {/* NOTE: Table */}
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid #bdbcbc",
          marginTop: "30px",
          background: "#fff",
        }}
      >
        <div className="rentedPropertiesTable">
          <Typography fontWeight={700} fontSize={16}>
            Property Name
          </Typography>
          <Typography fontWeight={700} fontSize={16}>
            Application Status
          </Typography>
          <Typography fontWeight={700} fontSize={16}>
            Landlord Contact
          </Typography>
          <Typography fontWeight={700} fontSize={16}>
            Submission Date
          </Typography>
          <Typography fontWeight={700} fontSize={16}>
            Action
          </Typography>
        </div>
        {rentedPropertiesData.map((property: any, idx: number) => (
          <div className="rentProperty" key={idx}>
            <Typography fontWeight={500} fontSize={13}>
              {property.propertyName}
            </Typography>
            <div
              style={{
                borderRadius: "20px",
                background: `${
                  property.applicationStatus === "Pending"
                    ? "#ffff001f"
                    : property.applicationStatus === "Approved"
                    ? "#90ee902f"
                    : "#ff00002f"
                }
                `,
                width: "100px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "17px",
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  background: `${
                    property.applicationStatus === "Pending"
                      ? "yellow"
                      : property.applicationStatus === "Approved"
                      ? "lightGreen"
                      : "red"
                  }
                `,
                  height: "10px",
                  width: "10px",
                  borderRadius: "100%",
                }}
              />
              <Typography
                fontWeight={500}
                fontSize={13}
                sx={{
                  color: `${
                    property.applicationStatus === "Pending"
                      ? "#d1d366"
                      : property.applicationStatus === "Approved"
                      ? "lightGreen"
                      : "red"
                  }
                `,
                }}
              >
                {property.applicationStatus}
              </Typography>
            </div>
            <Typography fontWeight={500} fontSize={13}>
              {property.landlordContact}
            </Typography>
            <Typography fontWeight={500} fontSize={13}>
              {property.submissionDate}
            </Typography>
            <IconButton
              id="action-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              aria-controls={open ? "basic-menu" : undefined}
              sx={{ width: "40px", height: "40px", margin: "auto" }}
            >
              <MoreVertIcon sx={{ fontSize: "20px", color: "#000" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              disableScrollLock
              sx={{
                width: "190px",
              }}
              PaperProps={{
                sx: {
                  boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default RentedProperties;
