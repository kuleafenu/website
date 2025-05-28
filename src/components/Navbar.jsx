import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Kuleafenu Joachim</Typography>
        {[['About','about'], ['Agents','agents'], ['Contact','contact']].map(([text, id]) => (
          <Button key={id} color="inherit">
            <Link to={id} smooth offset={-64}>{text}</Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}