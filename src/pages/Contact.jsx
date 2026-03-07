import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Get In Touch
      </Typography>

      <Typography paragraph color="text.secondary">
        Open to new opportunities — feel free to reach out via email or connect on LinkedIn.
      </Typography>

      <Box sx={{ my: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          href="mailto:kuleafenujoachim@gmail.com"
          sx={{ textTransform: 'none', px: 4 }}
        >
          kuleafenujoachim@gmail.com
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
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
        <IconButton
          color="secondary"
          component="a"
          href="https://github.com/kuleafenu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
