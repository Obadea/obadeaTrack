// import { AccountCircle } from "@mui/icons-material";
// import {
//   Avatar,
//   Stack,
//   Typography,
//   Badge,
//   TextField,
//   InputAdornment,
//   Input,
//   Box,
// } from "@mui/material";

// import MessageBox from "components/messageBox";
// import SearchIcon from "@mui/icons-material/Search";
// import { messageData } from "constants/index";
// import { useState } from "react";
// import { set } from "react-hook-form";

// const Message = () => {
//   const [selectedMsg, setSelectedMsg] = useState(0);
//   const [selectedMsgData, setSelectedMsgData] = useState(messageData[0]);

//   const handleMessangeChange = (id: number, data: any) => {
//     setSelectedMsg(id);
//     setSelectedMsgData(data);
//   };

//   return (
//     <Stack
//       display="flex"
//       direction="row"
//       sx={{ background: "#fff" }}
//       height="82vh"
//     >
//       <Stack width="40%">
//         <Typography fontWeight={600} fontSize={25} marginLeft={4} marginTop={2}>
//           Messages
//         </Typography>
//         <Stack>
//           <Input
//             id="input-with-icon-adornment"
//             disableUnderline
//             sx={{
//               borderRadius: "40px",
//               border: "1px solid #7695FF5f",
//               padding: "5px 10px",
//               margin: "14px 0",
//               width: "88%",
//               marginInline: "auto",
//             }}
//             placeholder="Search..."
//             startAdornment={
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             }
//           />
//         </Stack>
//         <Box
//           sx={{
//             // height: "60vh",
//             overflowX: "hidden",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {messageData.map((message: any, idx: number) => (
//             <Stack
//               display="flex"
//               direction="row"
//               alignItems="center"
//               onClick={() => {
//                 handleMessangeChange(idx, message);
//               }}
//               gap={2}
//               sx={{
//                 background: `${selectedMsg === idx ? "#7695FF5f" : "#fff"}`,
//                 padding: "14px",
//                 cursor: "pointer",
//                 borderBottom: "1px solid #f9f9f9",
//               }}
//             >
//               {message.status === "online" ? (
//                 <Badge
//                   overlap="circular"
//                   anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                   variant="dot"
//                   color="success"
//                   sx={{ color: "green" }}
//                 >
//                   <Avatar alt={message.name} src={message.avatar} />
//                 </Badge>
//               ) : (
//                 <Avatar alt={message.name} src={message.avatar} />
//               )}
//               <Stack>
//                 <Typography fontWeight={600}>{message.name}</Typography>
//                 <Typography fontSize={10} noWrap width={300}>
//                   {message.message[message.message.length - 1].text}
//                 </Typography>
//               </Stack>
//             </Stack>
//           ))}
//         </Box>
//       </Stack>
//       <Stack width="60%">
//         <MessageBox userMsgData={selectedMsgData} />
//       </Stack>
//     </Stack>
//   );
// };

// export default Message;

import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Stack,
  Typography,
  Badge,
  Input,
  InputAdornment,
  Box,
} from "@mui/material";
import MessageBox from "components/messageBox";
import SearchIcon from "@mui/icons-material/Search";
import { messageData } from "constants/index";
import { useState } from "react";

const Message = () => {
  const [selectedMsg, setSelectedMsg] = useState(0);
  const [selectedMsgData, setSelectedMsgData] = useState(messageData[0]);

  const handleMessageChange = (id: number, data: any) => {
    setSelectedMsg(id);
    setSelectedMsgData(data);
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ background: "#fff" }}
      height="82vh"
    >
      {/* Sidebar */}
      <Stack width={{ xs: "100%", md: "40%" }} p={2}>
        <Typography fontWeight={600} fontSize={25} mb={2}>
          Messages
        </Typography>
        {/* Search Bar */}
        <Input
          id="input-with-icon-adornment"
          disableUnderline
          sx={{
            borderRadius: "40px",
            border: "1px solid #7695FF5f",
            padding: "5px 10px",
            marginBottom: "14px",
            width: "100%",
          }}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {/* Messages List */}
        <Box
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "calc(100% - 80px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messageData.map((message: any, idx: number) => (
            <Stack
              key={idx}
              direction="row"
              alignItems="center"
              onClick={() => handleMessageChange(idx, message)}
              gap={2}
              sx={{
                background: selectedMsg === idx ? "#7695FF5f" : "#fff",
                padding: "14px",
                cursor: "pointer",
                borderBottom: "1px solid #f9f9f9",
                transition: "background 0.3s",
              }}
            >
              {message.status === "online" ? (
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                  color="success"
                >
                  <Avatar alt={message.name} src={message.avatar} />
                </Badge>
              ) : (
                <Avatar alt={message.name} src={message.avatar} />
              )}
              <Stack>
                <Typography fontWeight={600}>{message.name}</Typography>
                <Typography fontSize={12} noWrap>
                  {message.message[message.message.length - 1].text}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Stack>

      {/* Message Box */}
      <Stack
        width={{ xs: "100%", md: "60%" }}
        sx={{ borderLeft: { md: "1px solid #f0f0f0" }, p: 2 }}
      >
        <MessageBox userMsgData={selectedMsgData} />
      </Stack>
    </Stack>
  );
};

export default Message;
