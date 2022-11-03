import React from 'react';
import SnackbarMUI from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Check } from '@mui/icons-material';

interface SnackbarProps {
  openAlert: boolean;
  handleCloseAlert: () => void;
  alertText: string;
}

export function Snackbar(props: SnackbarProps) {
  const { openAlert, handleCloseAlert, alertText } = props;

  return (
    <SnackbarMUI
      open={openAlert}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      onClose={handleCloseAlert}
    >
      <Alert
        icon={<Check fontSize="inherit" sx={{ color: 'white.primary' }} />}
        severity="success"
        sx={{
          width: '100%',
          fontSize: 16,
          backgroundColor: 'primary.main',
          color: 'white.primary',
        }}
      >
        {alertText}
      </Alert>
    </SnackbarMUI>
  );
}
