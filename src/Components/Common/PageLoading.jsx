import React from 'react'
// import logo from './logo.svg'
import { Box, LinearProgress } from '@mui/material'

const PageLoading = () => {
  return (
    <>
        <Box sx={{ position : "fixed", top : "30%", left:"45%", display:"flex", flexDirection :"column", justifyContent:"center", alignItems : "center" }} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
              <path d="M10 13a5 5 0 0 1 7.54-.54l1.83 1.83a5 5 0 0 1-7.07 7.07l-1.06-1.06"/>
              <path d="M14 11a5 5 0 0 1-7.54.54L4.63 9.71a5 5 0 1 1 7.07-7.07l1.06 1.06"/>
            </svg>

            <LinearProgress sx={{ mt: "10px", borderRadius: 10, width:"150px" }} color="success" />
        </Box>
    </>
  )
}

export default PageLoading
