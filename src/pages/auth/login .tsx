import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IpropsLogin } from '../../types';

const Login: FC<IpropsLogin> = ({
  setEmail,
  setPassword,
  navigate,
  setGrow,
  // register,
  // errors,
}): JSX.Element => {
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant='h4' textAlign='center' sx={{ mt: -2 }}>
          Авторизація
        </Typography>

        <TextField
          variant='standard'
          label='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          // error={!!errors.email}
          // helperText={errors.email ? `${errors.email.message}` : ''}
          // {...register('email', { required: 'ооолл' })}
        />

        <TextField
          // type='password'
          variant='standard'
          label='Пароль'
          onChange={(e) => setPassword(e.target.value)}
          // error={!!errors.password}
          // helperText={errors.password ? `${errors.password.message}` : ''}
          // {...register('password', { required: 'ооолл' })}
        />
        <Stack alignItems={'center'}>
          <Button
            fullWidth
            sx={{ borderRadius: 5, my: 1 }}
            // size='large'
            type='submit'
            variant='contained'
            // loading={loading}
          >
            Авторизуватися
          </Button>
          <Typography variant='body1'>
            Немає аккаунту?
            <Button
              sx={{ borderRadius: 5, mx: 1 }}
              onClick={() => {
                setGrow(false);
                setTimeout(() => {
                  navigate('/register');
                  setGrow(true);
                }, 300);
              }}
            >
              Реєстрація
            </Button>
          </Typography>
        </Stack>
      </Stack>
    </form>
  );
};

export default Login;
