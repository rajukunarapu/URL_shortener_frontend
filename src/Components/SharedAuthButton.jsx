import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { logoutAPI } from "../Services/AuthServices/logoutAPI";

const SharedAuthButton = ({label, mode,  setlogoutAlertShow}) => {
    // Using useNavigate hook to programmatically navigate
  const navigate = useNavigate();
    // Accessing the AuthContext to get authentication status and logout function
  const { authCheck } = useContext(AuthContext)

    // Function to handle button click based on the mode
  const handleClick = async()=>{
    if(mode === "Login"){
      return navigate('/login')
    }else{
      const res = await logoutAPI();
      if(res.success){
        setlogoutAlertShow(res.success)
      }
      await authCheck();
    }
  }

  

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "linear-gradient(135deg, #FF512F, #DD2476)",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          px: 3,
          borderRadius: "30px",
          // boxShadow: "0 6px 15px rgba(255, 81, 47, 0.4)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #DD2476, #FF512F)",
            transform: "scale(1.05)",
          },
        }}
      >
        {label}
      </Button>

    </>
  );
};

export default SharedAuthButton;
