import { Button, Alert } from '@mui/material'
import React from 'react'

const SharedContinueButton = ({handleClick, responseAlertMessage, isAlertSuccess, isResponseAlertShow}) => {
    return (
        <>
            <Button
                onClick={handleClick}
                variant="contained"
                fullWidth
                sx={{
                    mt: 2,
                    mb: 2,
                    backgroundColor: "#fb641b",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    height: "45px",
                }}
            >
                Continue
            </Button>
            {isResponseAlertShow && (
                <Alert
                    severity={isAlertSuccess ? "success" : "error"}
                    sx={{ width: "92%", borderRadius: 10 }}
                >
                    {responseAlertMessage}
                </Alert>
            )}
        </>
  )
}

export default SharedContinueButton;
