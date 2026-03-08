import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import linkedinProfile from '../assets/images/linkedin-profile.jpeg';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        pt: 16,
        pb: 10,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={linkedinProfile}
        alt="Kuleafenu Joachim"
        sx={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          mb: 3,
        }}
      />

      <Typography variant="h3" component="h1" gutterBottom fontWeight={600}>
        Joachim Kuleafenu
      </Typography>

      <Typography variant="h6" component="p" color="text.secondary" gutterBottom>
        Software & AI Integration Engineer — Golang · React · AWS · AI/ML
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto', mb: 3 }}>
        I build scalable backend systems and AI-powered applications. Open to new opportunities.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        component={ScrollLink}
        to="about"
        smooth={true}
        offset={-64}
        sx={{ textTransform: 'none', px: 4 }}
      >
        Learn More About Me
      </Button>
    </Box>
  );
}
