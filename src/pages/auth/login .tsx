import { Button, Stack, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { ILoginData, IpropsLogin } from '../../types';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import { login } from '../../store/slices/auth';

// const Login: FC<IpropsLogin> = ({
// setEmail,
// setPassword,
// navigate,
// setGrow,
// register,
// errors,
// }): JSX.Element => {
const Login: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginData: ILoginData = { email, password };

  const loginForm = async (e: any) => {
    e.preventDefault();

    try {
      const user = await instance.post('auth/login_user', loginData);
      console.log(user);
      localStorage.setItem('token', user.data.accessToken);

      dispatch(login(user.data));
      navigate('/');
    } catch (e: any) {
      console.error(e.response.data.message);
    }
  };

  return (
    <Stack>
      <Typography variant='h4' textAlign='center' sx={{ mt: -2 }}>
        Авторизація
      </Typography>
      <form onSubmit={loginForm}>
        <Stack spacing={2} sx={{ mt: 2 }}>
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
          <Button
            fullWidth
            sx={{ borderRadius: 5, my: 1 }}
            type='submit'
            variant='contained'
            // loading={loading}
          >
            Авторизуватися
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
