import { Alert, Box, Button, Paper, TextField, Typography, Fade } from "@mui/material";
import React, { useState } from "react";
import { URLShortenerAPI } from "../../Services/URLServices/URLShortenerAPI";

const UserForm = ({ fetchURLData }) => {
  // state variables
  const [url, setUrl] = useState("");
  const [isAlertShow, setIsAlertShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // URL regualr expression
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;

  const handleClick = async (e) => {
    e.preventDefault();
    if (!urlPattern.test(url)) {
      setIsAlertShow(true);
      return;
    }
    setIsAlertShow(false);

    const res = await URLShortenerAPI(url);
    console.log("user sumitted: ",res.URLObject)
    setIsAlert(true);
    setIsSuccess(res.success);
    setResponseMessage(res.message);

    if (res.success) {
      setUrl(""); // clear input after successful shortening
      fetchURLData();  // after submitting data it calls the fetch API
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 6,
          borderRadius: 4,
          width: { xs: "90%", sm: "60%", md: "40%" },
          textAlign: "center",
        }}
      >
        {/* Improved Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "black" }}>
          Shorten Your Long URL Instantly!
        </Typography>

        {/* URL Input */}
        <TextField
                autoFocus
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                variant="filled"
                label= "Paste your long URL here"
                type={"text"}
                fullWidth
                sx={{
                    mb:1,
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
                        "&:hover fieldset": { borderColor: "  #ff6036" },
                        "& .Mui-focused fieldset": { borderColor: "blueviolet" },
                        "&:active fieldset": { borderColor: "pink" },
                        padding: 2,
                        borderRadius: 10,
                        width: "100%",
                        height: "45px",
                    },
                }}
            />

        {/* Invalid URL Alert */}
        <Fade in={isAlertShow}>
          <Alert severity="error" sx={{ mb: 2, borderRadius:5 }} onClose={() => setIsAlertShow(false)}>
            Please enter a valid URL (e.g., https://example.com)
          </Alert>
        </Fade>

        {/* Shorten Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleClick}
          sx={{
            width:"50%",
            borderRadius : 5,
            py: 1.2,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #DD2476, #FF512F)",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "scale(1.01)",
              transition: "0.2s ease-in-out",
            },
          }}
        >
        Shorten URL
        </Button>

        {/* Response Alert */}
        <Fade in={isAlert}>
          <Alert
            severity={isSuccess ? "success" : "error"}
            sx={{ mt: 2 }}
            onClose={() => setIsAlert(false)}
          >
            {responseMessage}
          </Alert>
        </Fade>
      </Paper>
    </Box>
  );
};

export default UserForm;