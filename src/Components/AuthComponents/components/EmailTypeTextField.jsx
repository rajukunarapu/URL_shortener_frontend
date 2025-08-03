import { TextField, Alert } from '@mui/material'
import React from 'react'

const EmailTypeField = ({ value, setValue, label, isValidationAlertShow }) => {
    return (
        <>
            <TextField
                autoFocus
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                variant="standard"
                label={label}
                type={"email"}
                fullWidth
                sx={{
                    mb: 1,
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
                        "&:hover fieldset": { borderColor: "  #ff6036" },
                        "& .Mui-focused fieldset": { borderColor: "blueviolet" },
                        "&:active fieldset": { borderColor: "pink" },
                        padding: 1,
                        borderRadius: 10,
                        width: "100%",
                        height: "45px",
                    },
                }}

            />
            {
                isValidationAlertShow && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && (
                    <Alert severity={"error"} sx={{ width: "90%", borderRadius: 10 }}>
                        Enter a valid email
                    </Alert>
                )}
        </>
    )
}

export default EmailTypeField
