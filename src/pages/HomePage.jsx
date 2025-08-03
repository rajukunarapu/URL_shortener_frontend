import React, { useEffect, useState } from 'react'
import NavBar from '../Layouts/NavBar'
import { Box } from '@mui/material'
import UserForm from '../Components/Common/UserForm'
import TableComponent from '../Components/Common/TableComponent'
import { fetchUserSpecificURLsAPI } from '../Services/URLServices/URLFetchUserSpecific'

const HomePage = () => {
  
  // state variable for url data
  const [urlData, setUrlData] = useState([])
  
  const fetchURLData = async()=>{
    const res = await fetchUserSpecificURLsAPI();
    setUrlData(res.URLObject)
  }

  useEffect(()=>{
    fetchURLData();
  },[])

  return (
    <>
      <NavBar/>
      <Box sx={{ padding:4 }} >
        <UserForm fetchURLData={fetchURLData} />
        <TableComponent urlData={urlData} />
      </Box>
    </>
  )
}

export default HomePage
