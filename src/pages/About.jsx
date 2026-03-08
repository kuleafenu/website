import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const skills = [
  'Golang', 'React', 'AWS', 'Python', 'Docker', 'Kubernetes',
  'PostgreSQL', 'REST APIs', 'Machine Learning', 'LLMs',
];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 8,
        px: 2,
        maxWidth: 640,
        mx: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={600}>
        About Me
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        I'm a results-driven Software & AI Integration Engineer with an M.Sc. in Computer Science. I build
        scalable backend systems and cloud-native applications, and I'm passionate about
        integrating AI/ML into real-world products.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Outside of work, I enjoy Ghanaian cooking, fitness, and cultural exploration.
      </Typography>

      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Tech Stack
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} variant="outlined" size="small" />
        ))}
      </Box>
    </Box>
  );
}
