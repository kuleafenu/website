import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import joachim_logo from '../assets/images/joachim_logo.jpg';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)', 
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {/* Title on the left */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
        <Button
              key={1}
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(38, 34, 34, 0.08)',
                },
              }}
              component={ScrollLink}
              to={"hero"}
              smooth={true}
              offset={-64} // compensate for fixed AppBar height
            >
              <img src={joachim_logo} alt="Joachim Logo" style={{ width: '150px', height: '50px' }} />
            </Button>
          
        </Typography>

        {/* Push the navigation links to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation links (styled similarly to MDL’s mdl-navigation__link) */}
        <Box component="nav" sx={{ display: 'flex', gap: 2,  }}>
          {[
            ['Home', 'hero'],
            ['About', 'about'],
            ['Agents', 'agents'],
            ['Contact', 'contact'],
          ].map(([label, targetId]) => (
            <Button
              key={targetId}
              color="inherit"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(38, 34, 34, 0.08)',
                },
              }}
              component={ScrollLink}
              to={targetId}
              smooth={true}
              offset={-64} // compensate for fixed AppBar height
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
