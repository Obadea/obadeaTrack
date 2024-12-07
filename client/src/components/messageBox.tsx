import {
  Avatar,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useEffect, useState } from "react";
interface messageBoxProps {
  userMsgData: any;
}

const MessageBox = ({ userMsgData }: messageBoxProps) => {
  const [messages, setMessages] = useState(userMsgData.message);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // console.log(userMsgData);
    setMessages(userMsgData.message);
    console.log(messages);
  }, [userMsgData.message || newMessage]);

  const handleSend = () => {
    if (newMessage.trim()) {
      userMsgData.message.push({
        id: userMsgData.message.length + 1,
        text: newMessage,
        sender: "tenant",
      });
      setMessages(userMsgData.message);
      setNewMessage(""); // Clear the input field
    }
  };

  return (
    <Stack>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        sx={{
          background: `#7695FF`,
          padding: "14px",
          borderBottom: "1px solid #e6e4e49f",
        }}
      >
        <Stack display="flex" direction="row" alignItems="center" gap={2}>
          <Avatar alt={userMsgData.name} src={userMsgData.avatar} />
          <Stack>
            <Typography
              fontWeight={600}
              color="#fff"
            >{`${userMsgData.name} (${userMsgData?.role})`}</Typography>
            <Typography fontSize={10} fontWeight={500} color="#fff">
              {userMsgData?.status}
            </Typography>
          </Stack>
        </Stack>
        <Stack display="flex" direction="row" gap={1}>
          <IconButton>
            <CallIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <MoreHorizIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* NOTE: MESSAGE */}
      {/* <Stack height="80vh" sx={{ background: "#fff" }}></Stack> */}

      <Stack
        height="70vh"
        sx={{
          background: "#f9f9f9",
          padding: 2,
        }}
      >
        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 1,
            borderRadius: 2,
            background: "#f9f9f9",
            border: "1px solid #ddd",
          }}
        >
          {messages.map((message: any) => (
            <Box
              key={message.id}
              sx={{
                alignSelf:
                  message.sender === "tenant" ? "flex-end" : "flex-start",
                background: message.sender === "tenant" ? "#d1e7dd" : "#e7f1ff",
                padding: "8px 12px",
                borderRadius: "10px",
                maxWidth: "70%",
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* Message Input */}
        <Stack direction="row" spacing={1} mt={2} alignItems="center">
          <TextField
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <IconButton
            sx={{ color: "#7695FF" }}
            onClick={handleSend}
            aria-label="send message"
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MessageBox;
