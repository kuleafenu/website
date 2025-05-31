import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, textAlign: 'center' }}>
      {/* Section Title */}
      <Typography variant="h4" gutterBottom>
        Get In Touch
      </Typography>

      {/* Description */}
      <Typography paragraph>
        For collaborations or inquiries, reach out via email or LinkedIn.
      </Typography>

      {/* Email Button */}
      <Box sx={{ my: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          href="mailto:your.email@example.com"
          sx={{ textTransform: 'none' }}
        >
          kuleafenujoachim@gmail.com
        </Button>
      </Box>

      {/* LinkedIn Link */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
        <Typography variant="body1">LinkedIn:</Typography>
        <IconButton
          color="secondary"
          component="a"
          href="https://www.linkedin.com/in/joachim-kuleafenu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>

      {/* More Contact Options Icon */}
      <Box>
        <IconButton
          color="primary"
          component="a"
          href="contact.html"
          title="More ways to contact me"
          aria-label="More Contact Options"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
