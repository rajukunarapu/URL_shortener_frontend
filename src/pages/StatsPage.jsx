import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Divider, Stack, Link } from '@mui/material';
import NavBar from '../Layouts/NavBar';
import { QueryStats } from '@mui/icons-material';

const StatsPage = () => {
  const location = useLocation();
  const stats = location.state; // we passed this from TableComponent

  return (
    <>
      <NavBar/>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, px: 2 }}>
        <Paper 
          elevation={4} 
          sx={{ 
            p: 4, 
            borderRadius: 3, 
            width: { xs: '95%', sm: '500px' }, 
            textAlign: 'left',
            background: '#fafafa'
          }}
        >
          {/* Title */}
          <Typography 
            variant="h5" 
            sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: '#333' }}
          >
            <Stack direction={"row"} spacing={1} justifyContent="center" alignItems="center">
                <QueryStats/>
                URL Stats
            </Stack>
          </Typography>

          {/*  Original URL Row */}
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography sx={{ fontWeight: 'bold' }}>Original URL:</Typography>
            <Link 
              href={stats?.originalURL} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ maxWidth: '60%', textAlign: 'right', color: 'blue', wordBreak: 'break-all' }}
            >
              {stats?.originalURL}
            </Link>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          {/*  Short URL Row */}
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography sx={{ fontWeight: 'bold' }}>Short URL:</Typography>
            <Link 
              href={stats?.shortURL} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ maxWidth: '60%', textAlign: 'right', color: '#1976d2', wordBreak: 'break-all' }}
            >
              {stats?.shortURL}
            </Link>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          {/*  Clicks */}
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography sx={{ fontWeight: 'bold' }}>Clicks:</Typography>
            <Typography>{stats?.clicks}</Typography>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          {/* Created At */}
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Typography sx={{ fontWeight: 'bold' }}>Created At:</Typography>
            <Typography>{new Date(stats?.createdAt).toLocaleString()}</Typography>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          {/* Created By */}
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: 'bold' }}>Created By:</Typography>
            <Typography>{stats?.createdBy}</Typography>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default StatsPage;
