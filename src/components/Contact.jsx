import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Get In Touch</Typography>
      <Typography paragraph>For collaborations or inquiries, email me at</Typography>
      <Button variant="contained" href="mailto:your.email@example.com">your.email@example.com</Button>
    </Box>
  );
}