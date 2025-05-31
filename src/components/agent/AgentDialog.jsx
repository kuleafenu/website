import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import React from 'react';
import Slide from '@mui/material/Slide';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function AgentDialog({ open, onClose, selectedAgent, handleRequestClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slots={{ transition: Transition }}
    maxWidth="lg"
    fullWidth
    disableEscapeKeyDown
    >
    <DialogTitle sx={{ m: 0, p: 2 }}>
    {selectedAgent.title}
    <IconButton
        aria-label="close"
        onClick={handleRequestClose}
        sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
        }}
    >
        <CloseIcon />
    </IconButton>
    </DialogTitle>

    <DialogContent dividers sx={{ p: 0 }}>
    {/* Embed the Gradio iframe responsively */}
    <Box
        component="iframe"
        src={selectedAgent.embedUrl}
        title={selectedAgent.title}
        width="100%"
        height="800px"
        sx={{
        border: 'none',
        display: 'block',
        }}
    />
    {/*
        If you prefer using the <gradio-app> tag, ensure the script is loaded in your index.html:
        <script
        type="module"
        src="https://gradio.s3-us-west-2.amazonaws.com/5.31.0/gradio.js"
        ></script>
        
        Then replace the above iframe with:
        <Box
        component="gradio-app"
        src={selectedAgent.embedUrl}
        sx={{ width: '100%', height: '600px' }}
        />
    */}
    </DialogContent>

<DialogActions sx={{ px: 3, py: 2 }}>
  <Button
    onClick={handleRequestClose}
    color="primary"
    startIcon={<ArrowForwardIcon />}
    sx={{ textTransform: 'none' }}
  >
    Close
  </Button>
</DialogActions>
</Dialog>
  );
}