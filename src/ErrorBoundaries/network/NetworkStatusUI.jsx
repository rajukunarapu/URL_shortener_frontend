import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { WifiOff } from "@mui/icons-material";

const NetworkStatusUI = () => {
  // This component displays a user-friendly message when there is no internet connection
  // It includes an animated icon, a headline, subtext, and a retry button
  // The retry button reloads the page to attempt to reconnect
  // The design is responsive, adjusting for mobile devices
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Main container for the network status UI */}
      {/* This Box handles the full-screen layout and background styling */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #fff5f5, #ffe5e5)",
          px: 2,
        }}
      >
        {/* Inner Box for content alignment and styling */}
        {/* This Box centers the content and applies padding, border radius, and shadow */} 
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "450px",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          {/* Animated No Wi-Fi Icon */}
          <WifiOff
            sx={{
              fontSize: isMobile ? 60 : 80,
              color: "#e53935",
              mb: 2,
              animation: "pulse 1.5s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.1)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          />

          {/* Headline */}
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            gutterBottom
          >
            No Internet Connection
          </Typography>

          {/* Subtext */}
          <Typography variant="body1" color="text.secondary" mb={3}>
            Please check your connection and try again.
          </Typography>

          {/* Optional Retry Button */}
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => window.location.reload()}
            sx={{
              px: 4,
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(229,57,53,0.3)",
              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
          >
            Retry
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NetworkStatusUI;
