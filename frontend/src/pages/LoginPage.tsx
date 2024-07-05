// ⭐ Page de connexion
// 🔸 Créer un formulaire de connexion
// 🔸 Utiliser le hook useState pour stocker les valeurs des champs de saisie

// --------------------------------------------------------------------------------------

import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Header from '../layouts/authentification/Header';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('username', username);
    console.log('password', password);
  };

  return (
    <>
      <Header />

      <Box component="main" display={'flex'} flexDirection={'row'}>
        <Box
          display={'flex'}
          gap={8}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'#f5f5f5'}
          minHeight={'100vh'}
          p={8}
        >
          <div>
            <Typography fontSize={32} fontWeight={700} textAlign={'center'}>
              Hi, Welcome back !
            </Typography>
            <Typography textAlign={'center'} component="p">
              Vous pouvez vous connecter.
            </Typography>
          </div>

          <Box
            component="img"
            src="https://github.com/minimal-ui-kit/material-kit-react/blob/main/public/assets/images/avatars/avatar_1.jpg?raw=true"
            alt="login"
          />
        </Box>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={4}
          p={8}
          minWidth={'600px'}
          minHeight={'100vh'}
          component="form"
          onSubmit={handleLogin}
        >
          <TextField
            label="Adresse email"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" type="submit" onClick={handleLogin}>
            Connexion
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
