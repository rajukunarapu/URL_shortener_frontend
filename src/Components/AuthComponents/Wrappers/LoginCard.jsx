import React, { useState } from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { loginAPI } from "../../../Services/AuthServices/loginAPI";
import EmailTypeField from "../components/EmailTypeTextField";
import PasswordTypeField from "../components/PasswordTypeTextField";
import SharedContinueButton from "../components/SharedContinueButton";

const LoginCard = () => {

    // naviage hook
  const navigate = useNavigate();

  // context authCheck function
  const { authCheck } = useContext(AuthContext)

  // state variables
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // state variable for showing alert for text fields
  const [isValidationAlertShow, setisValidationAlertShow] = useState(false);

  // state variables for showing alert for after clicking continue
  const [responseMessage, setresponseMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isResponseAlertShow, setisResponseAlertShow] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    // showing alert when email and password are not valid
    setisValidationAlertShow(true);
    if (email !== "" && password !== "") {
        // false the state variable when email and password are valid
      setisValidationAlertShow(false);
      const data = await loginAPI({ email, password });
      setisResponseAlertShow(true);
      setisSuccess(data.success);
      setresponseMessage(data.message);
      if (data.success) {
        setemail("");
        setpassword("");
        localStorage.setItem('userData', JSON.stringify(data.userData))
        // setUserData(data.userData)
        await authCheck();
        navigate("/");
      }
    }
  };

  return (
    <Box
      minHeight={"600px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background: "linear-gradient(to right, #83a4d4, #b6fbff)",
        padding: 4,
      }}
    >
      <Box
        display={"flex"}
        borderRadius={4}
        boxShadow={5}
        overflow={"hidden"}
        width={{ xs: "95%", md: "65%" }}
        height="500px"
      >
        {/* Left Section */}
        <Box
          flex={1}
          sx={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            p: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight={"bold"} gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#e0e0e0" }}>
            Access your events, venues, and recommendations in one place.
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: "white", opacity: 0.3 }} />
          <Typography variant="caption" sx={{ color: "#d1d1d1" }}>
            Enter your login details on the right to continue to your dashboard.
          </Typography>
        </Box>

        {/* Right Section */}
        <Stack
          flex={1}
          spacing={3}
          p={5}
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          <Typography variant="h5" fontWeight={"600"} color="primary">
            Sign In
          </Typography>
          <EmailTypeField
            value={email}
            setValue={setemail}
            label={"Enter Email"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <PasswordTypeField
            value={password}
            setValue={setpassword}
            label={"Enter Password"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <SharedContinueButton
            handleClick={handleClick}
            responseAlertMessage={responseMessage}
            isAlertSuccess={isSuccess}
            isResponseAlertShow={isResponseAlertShow}
          />
          <Link
            underline="hover"
            href="/signup"
            fontWeight={"500"}
            sx={{
              textAlign: "center",
              mt: 1,
              "&:hover": { color: "#ff4081", transition: "0.3s" },
            }}
          >
            New to the platform? <strong>Create an account</strong>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginCard;