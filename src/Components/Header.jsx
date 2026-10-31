import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
  const Aboutmessage = 'An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.'
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Cmz-OvIzg8_xfpam-4bHmIS07zmHmGrpESjue5DNew&s=10" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none fw-bolder'>AI Resume Builder</Link>
          </Typography>
          <Link to={'/all-resumes'} className='text-light text-decoration-none '>All RESUMES</Link>
          <Link to={'/downloads'} className='text-light text-decoration-none mx-5'>ALL DOWNLOADS</Link>

          <Tooltip title={Aboutmessage}>
            <Button color="inherit">About US</Button>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
