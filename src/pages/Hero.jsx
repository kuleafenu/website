import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import linkedinProfile from '../assets/images/linkedin-profile.jpeg';
import ConfirmationDialog from '../components/agent/ConfirmationDialog';
import AgentDialog from '../components/agent/AgentDialog';
import careerAgent from '../assets/images/career-agent.png';

export default function Hero() {

  const agents = [
    {
      title: 'Personal Career Assistant',
      id: 'career-agent',
      imgSrc: careerAgent,
      alt: 'Career Assistant',
      embedUrl: 'https://kuleafenu-career-conversation.hf.space',
      // If you prefer the <gradio-app> tag approach, ensure the script is loaded globally (e.g. in index.html).
      // embedGradio: true,
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

    <>
    <Box
      component="section"
      id="hero"
      sx={{
        py: 8,                
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
          mb: 4,             
        }}
      />

      <Typography variant="h2" component="h1" gutterBottom>
        Hello, I’m Joachim Kuleafenu
      </Typography>

      <Typography variant="h5" component="p" gutterBottom>
        Software Engineer & AI/ML Enthusiast
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        href="#about"
        sx={{ mt: 2 }}
        onClick={() => handleOpen('career-agent')}
      >
        Learn More About Me
      </Button>
    </Box>

    <Box id="agents-more" sx={{ py: 8, px: 2 }}>
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
    </>

  );
}

