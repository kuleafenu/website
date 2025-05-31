import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 8,
        px: 2,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      {/* First Paragraph */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        I am a results-driven Software Engineer with an M.Sc. in Computer Science. I build
        scalable, legacy or cloud-native applications using Golang, React, and AWS. My passion lies in
        integrating AI/ML into real-world solutions, and I maintain a YouTube channel where I
        share business-focused storytelling.
      </Typography>

      {/* Second Paragraph */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        Outside of work, I enjoy perfecting my signature Ghanaian goat soup in the kitchen,
        maintaining a disciplined fitness routine, and planning cultural explorations.
      </Typography>
      {/* "Read More" Icon Button */}
      <Box>
        <IconButton
          color="primary"
          component="a"
          href="about.html"
          title="Read more about me"
          aria-label="Read more"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
