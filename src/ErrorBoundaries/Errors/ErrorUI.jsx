import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { ReportProblemOutlined } from "@mui/icons-material";

const ErrorUI = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9f9f9, #f1f1f1)",
        px: 2,
      }}
    >
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
        {/* Animated Error Icon */}
        <ReportProblemOutlined
          sx={{
            fontSize: isMobile ? 60 : 80,
            color: "#f44336",
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
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold" gutterBottom>
          Oops! Something went wrong.
        </Typography>

        {/* Subtext */}
        <Typography variant="body1" color="text.secondary" mb={3}>
          We’re working on it. You can try refreshing the page.
        </Typography>

        {/* Refresh Button */}
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
            boxShadow: "0 4px 12px rgba(244,67,54,0.3)",
            "&:hover": {
              backgroundColor: "#d32f2f",
            },
          }}
        >
          Refresh Page
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorUI;
