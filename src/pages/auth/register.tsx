import { FC, useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Customer from '../../components/customer';
import {
  useAppDispatch,
  useAppSelector,
  useUnLoggedUser,
} from '../../utils/hooks';
import { ILoginData, IUserData } from '../../types';
import { instanceAuth } from '../../utils/axios';
import { login } from '../../store/slices/auth';

const Register: FC<{
  setGrow: (value: boolean) => void;
}> = ({ setGrow }): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user.userData);
  // const auth = useAuth();
  const unLoggedUser = useUnLoggedUser();

  const [sign, setSign] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerData: Partial<IUserData & ILoginData> = {
    ...user,
    email,
    password,
  };
  // console.log(registerData);
  // console.log(auth);

  const registerForm = async (e: any) => {
    e.preventDefault();

    console.log(registerData);

    if (password === confirmPassword) {
      try {
        const newUser = await instanceAuth.patch(
          'auth/register_user',
          registerData
        );
        console.log(newUser);
        localStorage.setItem('token', newUser.data.accessToken);

        dispatch(login(newUser.data));
        navigate('/');
      } catch (e: any) {
        console.error(e.response?.data?.message);
        // navigate('/login');
      }
    } else {
      // throw new Error(AppErrors.PasswordsDoNotMatch);
      console.error('Паролі не співпали');
    }
  };

  return (
    <Stack>
      <Typography variant='h4' textAlign='center' sx={{ mt: -1 }}>
        {!unLoggedUser ? 'Реєстрація' : 'Ви зареєстровані !'}
      </Typography>
      {unLoggedUser && (
        <Button
          variant='contained'
          sx={{ my: 4, borderRadius: 5 }}
          onClick={() => {
            setGrow(false);
            setTimeout(() => {
              navigate('/login');
              setGrow(true);
            }, 300);
          }}
        >
          Увійти
        </Button>
      )}
      {!unLoggedUser && (
        <Customer setGrow={setGrow} sign={sign} setSign={setSign} />
      )}
      <form onSubmit={registerForm}>
        {sign && (
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              variant='standard'
              label='E-mail'
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant='standard'
              label='Пароль'
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant='standard'
              label='Підтвердження пароля'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              fullWidth
              sx={{ borderRadius: 5, my: 1 }}
              type='submit'
              variant='contained'
            >
              Peєстрацiя
            </Button>
          </Stack>
        )}
      </form>
    </Stack>
  );
};

export default Register;
