import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center, JustifyCenter } from '../../helpers';
import { Button, Grow, IconButton, Paper, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import imgMain from '../../assets/img-main.jpg';
import Login from './login ';
import Register from './register';
import { useUnLoggedUser } from '../../utils/hooks';

const AuthRoot: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const unLoggedUser = useUnLoggedUser();

  const [grow, setGrow] = useState(true);

  const authPage = (text: string, innerButton: string, path: string) => (
    <JustifyCenter sx={{ mt: 1 }}>
      <Typography variant='body1'>
        {text}
        <Button
          size='small'
          sx={{ borderRadius: 5, mx: 1 }}
          onClick={() => {
            setGrow(false);
            setTimeout(() => {
              navigate(path);
              setGrow(true);
            }, 300);
          }}
        >
          {innerButton}
        </Button>
      </Typography>
    </JustifyCenter>
  );

  return (
    <Grow in={true} {...{ timeout: 300 }}>
      <Center
        sx={{
          height: {
            xs: '100 %',
            sm: '100vh',
          },
          background: `url(${imgMain}) center/cover`,
          py: 2,
        }}
      >
        <Grow in={grow} {...{ timeout: 300 }}>
          <Paper
            elevation={6}
            sx={{
              width: { xs: 300, sm: 500, md: 600 },
              borderRadius: 5,
              p: { xs: 1, sm: 3 },
              boxShadow: '-3px -2px 20px 1px #202020',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <IconButton
              sx={{ display: 'flex', alignSelf: 'flex-end' }}
              onClick={() => navigate('/')}
            >
              <Close />
            </IconButton>
            {pathname === '/login' ? (
              <>
                <Login />
                {authPage('Немає аккаунту?', 'Реєстрація', '/register')}
              </>
            ) : pathname === '/register' ? (
              <>
                <Register setGrow={setGrow} />
                {!unLoggedUser
                  ? authPage('Зареєстровані?', 'Вхід', '/login')
                  : null}
              </>
            ) : null}
          </Paper>
        </Grow>
      </Center>
    </Grow>
  );
};

export default AuthRoot;
