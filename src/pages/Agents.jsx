import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slide from '@mui/material/Slide';
import careerAgent from '../assets/images/career-agent.png';
import interviewPrepAgent from '../assets/images/interview_prep_agent.png';
import researchAgent from '../assets/images/research-agent.png';
import AgentDialog from '../components/agent/AgentDialog';
import ConfirmationDialog from '../components/agent/ConfirmationDialog';



export default function Agents() {
  const agents = [
    {
      title: 'Personal Career Assistant',
      id: 'career-agent',
      description: 'An AI assistant trained on my background. Ask it anything about my experience, skills, or projects.',
      imgSrc: careerAgent,
      alt: 'Career Assistant',
      embedUrl: 'https://kuleafenu-career-assistant.hf.space',
    },
    {
      title: 'Interview Prep Agent',
      id: 'interview-agent',
      description: 'Simulates technical and behavioral interviews, provides feedback, and helps candidates prepare.',
      imgSrc: interviewPrepAgent,
      alt: 'Interview Prep',
      embedUrl: 'https://kuleafenu-interview-prep.hf.space',
    },
    {
      title: 'Deep Research Agent',
      id: 'research-agent',
      description: 'Performs multi-step web research on any topic and synthesizes findings into a structured report.',
      imgSrc: researchAgent,
      alt: 'Research Helper',
      embedUrl: 'https://kuleafenu-deep-research-agent.hf.space',
    },
  ];

  const [openAgentId, setOpenAgentId] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleOpen = (agentId) => {
    setOpenAgentId(agentId);
  };

  const handleRequestClose = () => {
    // When the user clicks the close icon or "Close" button, open confirmation dialog
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    // User confirmed they want to close the agent dialog
    setConfirmOpen(false);
    setOpenAgentId(null);
  };

  const handleCancelClose = () => {
    // User decided not to close; keep the agent dialog open
    setConfirmOpen(false);
  };

  const handleDialogClose = (event, reason) => {
    // Prevent closing on backdrop click or Escape key
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return;
    }
    // Otherwise, opening confirm dialog
    handleRequestClose();
  };

  const selectedAgent = agents.find((ag) => ag.id === openAgentId);

  return (
    <Box id="agents" sx={{ py: 8, px: 2 }}>
      {/* Section Header */}
      <Typography variant="h4" align="center" gutterBottom fontWeight={600}>
        AI Projects
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        AI agents I designed and built — click any to interact with them live.
      </Typography>

      {/* Agent Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {agents.map((agent) => (
          <Grid item xs={12} sm={6} md={4} key={agent.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              {/* Agent Image */}
              <CardMedia
                component="img"
                src={agent.imgSrc}
                alt={agent.alt}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                }}
              />

              {/* Title and Button */}
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {agent.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {agent.description}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleOpen(agent.id)}
                  sx={{ textTransform: 'none', mt: 'auto' }}
                >
                  Try It
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Agent Modal/Dialog */}
      {selectedAgent && (
        <AgentDialog
          open={Boolean(openAgentId)}
          onClose={handleDialogClose}
          selectedAgent={selectedAgent}
          handleRequestClose={handleRequestClose}
        />
      )}

      {/* Confirm Close Dialog */}
      <ConfirmationDialog
        confirmOpen={confirmOpen}
        handleCancelClose={handleCancelClose}
        handleConfirmClose={handleConfirmClose}
        selectedAgent={selectedAgent}
      />

    </Box>
  );
}
