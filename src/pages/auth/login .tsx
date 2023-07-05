import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IpropsLogin } from '../../types';
// import { IPropsLogin } from '../../types/auth';

const Login: FC<IpropsLogin> = ({
  setEmail,
  setPassword,
  navigate,
  // register,
  // errors,
}): JSX.Element => {
  return (
    <Stack spacing={3}>
      <Typography variant='h4' textAlign='center'>
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
          sx={{
            borderRadius: 5,
            width: { xs: '100%', sm: '60%' },
            mt: 2,
            mb: 2,
          }}
          size='large'
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
            onClick={() => navigate('/register')}
          >
            Реєстрація
          </Button>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
