import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, Alert } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const PasswordTypeField = ({ value, setValue, label, isValidationAlertShow }) => {

    // visibilty toogle for icon
    const [visibilityToggle, setVisibilityToggle] = useState(false);

    return (
        <>
            <TextField
                name={"password"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="standard"
                label={label}
                type={visibilityToggle ? "text" : "password"}
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
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => setVisibilityToggle((prev) => !prev)}>
                                {visibilityToggle ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            {isValidationAlertShow &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value) && (
                    <Alert severity={"error"} sx={{ width: "90%", borderRadius: 10 }}>
                        Enter a valid password
                    </Alert>
                )}
        </>
    )
}

export default PasswordTypeField
