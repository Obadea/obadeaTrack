import { useEffect, useRef } from 'react';
import { useLogin } from '@refinedev/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { obadeaTrack } from '../assets';

import { CredentialResponse } from '../interfaces/google';

// mine
const GOOGLE_CLIENT_ID =
  '363004531884-6im7otarh0mhgreli5br5ol2v8to0b70.apps.googleusercontent.com';

// const GOOGLE_CLIENT_ID =
//   '794527303566-gvitfaq8dprefl2plvsubf5mhbnulpse.apps.googleusercontent.com';

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>({
    v3LegacyAuthProviderCompatible: true,
  });

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === 'undefined' || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: 'popup',
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: 'filled_blue',
          size: 'medium',
          type: 'standard',
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box component="div" sx={{ backgroundColor: '#FCFCFC' }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <img src={obadeaTrack} alt="Yariga Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
