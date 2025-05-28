import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Box id="about" sx={{ py: 8, px: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography paragraph>I am a results-driven software engineer with an M.Sc. in Computer Science... (customize your bio here)</Typography>
    </Box>
  );
}