import * as React from 'react';

import { IconButton, Popover, Typography, Avatar, Box, Divider, MenuItem } from '@mui/material';
import { account } from '../../../_mock/account';

// --------------------------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Accueil', icon: 'eva:home-fill' },
  { label: 'Mon compte', icon: 'eva:person-fill' },
  { label: 'Paramètres', icon: 'eva:settings-2-fill' },
];

// --------------------------------------------------------------------------------------

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          width: 40,
          height: 40,
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
          }}
        >
          {account.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              p: 0,
              mt: 1,
              ml: 0.75,
              width: 200,
            },
          },
        }}
      >
        <Box>
          <Typography>{account.displayName}!</Typography>
          <Typography>{account.email}</Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose}>
            {option.label}
          </MenuItem>
        ))}

        <MenuItem onClick={handleClose}>Se déconnecter</MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;
