import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ConfirmationDialog({ confirmOpen, handleCancelClose, handleConfirmClose, selectedAgent }) {
  return (
      <Dialog
        open={confirmOpen}
        onClose={(e, reason) => {
          // Prevent closing via backdrop or escape in confirm dialog as well
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
          handleCancelClose();
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Confirm Close</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to close <strong>{selectedAgent?.title}</strong>? Your current session will end.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} color="primary" sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmClose} color="secondary" sx={{ textTransform: 'none' }}>
            Yes, Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}