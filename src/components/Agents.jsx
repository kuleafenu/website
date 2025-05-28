import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Agents() {
  const agents = [
    { title: 'Career Assistant', id: 'career-agent' },
    { title: 'Interview Prep', id: 'interview-agent' },
    { title: 'Research Helper', id: 'research-agent' }
  ];

  return (
    <Box id="agents" sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>My Personal Agents</Typography>
      <Grid container spacing={2} justifyContent="center">
        {agents.map((agent) => (
          <Grid item xs={12} md={4} key={agent.id}>
            <Card sx={{ height: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{agent.title}</Typography>
                <Box id={agent.id} sx={{ bgcolor: 'grey.200', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Embed your agent widget here */}
                  Agent Interface
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}