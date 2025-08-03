import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import AuthContext from "../../../Context/AuthContext";
import SharedContinueButton from "../components/SharedContinueButton";
import TextTypeField from "../components/TextTypeFIeld";
import EmailTypeField from "../components/EmailTypeTextField";
import PasswordTypeField from "../components/PasswordTypeTextField";
import { signupAPI } from "../../../Services/AuthServices/signupAPI";

const SignUpCard = () => {

    // naviage hook
  const navigate = useNavigate();

  // auth function
  const { authCheck } = useContext(AuthContext)

  // state variables for username, email and password
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
    // state variable for showing alert when text fields are not valid
  const [isValidationAlertShow, setIsValidationAlertShow] = useState(false);

  // state varibles for showing response after submitting credentials
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResponseAlertShow, setIsResponseAlertShow] = useState(false);

  const userPayload = {
    username,
    email,
    password,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // true when credentials or not valid
    setIsValidationAlertShow(true);
    if (email !== "" && password !== "") {
      setIsValidationAlertShow(false);
      const data = await signupAPI(userPayload);
      setIsResponseAlertShow(true);
      setIsSuccess(data.success);
      setResponseMessage(data.message);
      if (data.success) {
        setEmail("");
        setPassword("");
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
            Looks like you're new here!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#e0e0e0" }}>
            Sign up with your email to get started on your journey.
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: "white", opacity: 0.3 }} />
          <Typography variant="caption" sx={{ color: "#d1d1d1" }}>
            Create an account to explore events, venues, and more.
          </Typography>
        </Box>

        {/* Right Section */}
        <Stack
          flex={1}
          spacing={2}
          p={5}
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          <Typography variant="h5" fontWeight={"600"} color="primary">
            Create Account
          </Typography>

          <TextTypeField
            value={username}
            setValue={setUserName}
            label={"Enter User Name"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <EmailTypeField
            value={email}
            setValue={setEmail}
            label={"Enter Email"}
            isValidationAlertShow={isValidationAlertShow}
          />
          <PasswordTypeField
            value={password}
            setValue={setPassword}
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
            href="/login"
            fontWeight={"500"}
            sx={{
              textAlign: "center",
              mt: 1,
              "&:hover": { color: "#ff4081", transition: "0.3s" },
            }}
          >
            Already have an account? <strong>Login</strong>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpCard;