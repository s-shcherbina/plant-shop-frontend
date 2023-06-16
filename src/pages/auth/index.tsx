import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthRoot: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const [values, setValues] = useState<IPhoneMask>({
  //   textmask: '',
  // });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  // const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [form, setForm] = useState(false);

  // const [auth, setAuth] = useState(false);

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // console.log(errors);

  // const handleSubmitForm = async (data: any) => {
  //   console.log(data);
  //   if (pathname === '/login') {
  //     const loginData = { email: data.email, password: data.password };
  //     try {
  //       const user = await instance.post('auth/login_su', loginData);
  //       localStorage.setItem('token', user.data.userData.accessToken);

  //       console.log(user);

  //       dispatch(login(user.data));
  //       navigate('/');
  //     } catch (e: any) {
  //       console.error(e.response.data.message);
  //     }
  //   }
  //   if (pathname === '/register') {
  //     if (!form) {
  //       const loginPhone = { phone: values.textmask };
  //       try {
  //         const user = await instance.post('auth/login', loginPhone);
  //         localStorage.setItem('token', user.data.userData.accessToken);

  //         console.log(user.data, user.data.userData);

  //         setDelivery(user.data.userData.delivery);
  //         setLocality(user.data.userData.locality);
  //         setDepartment(user.data.userData.department);
  //         setFirstName(user.data.userData.firstName);
  //         setLastName(user.data.userData.lastName);
  //         setAuth(true);
  //         if (
  //           user.data.userData.role.slice(-1) === 'S' ||
  //           user.data.userData.role.slice(-1) === 'A'
  //         )
  //           console.error(`${user.data.userData.phone} вже існує.Увійдіть!`);
  //       } catch (e: any) {
  //         console.error(e.response.data.message);
  //       }
  //     }
  //     const registerData = {
  //       phone: values.textmask,
  //       firstName,
  //       lastName,
  //       department,
  //       locality: locality?.label ? locality.label : locality,
  //       delivery,
  //       email,
  //       password,
  //     };
  //     if (form) {
  //       if (password === confirmPassword) {
  //         if (auth) {
  //           console.log(registerData);

  //           const newUser = await instance.patch(
  //             'auth/super_user',
  //             registerData
  //           );
  //           dispatch(login(newUser.data));
  //           navigate('/');
  //         } else {
  //           try {
  //             const newUser = await instance.post(
  //               'auth/register_su',
  //               registerData
  //             );

  //             console.log(newUser);

  //             dispatch(login(newUser.data));
  //             navigate('/');
  //           } catch (e: any) {
  //             console.error(e.response.data.message);
  //           }
  //         }
  //       } else {
  //         throw new Error(AppErrors.PasswordsDoNotMatch);
  //         // console.error('Паролі не співпали');
  //       }
  //     }
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit(handleSubmitForm)}>
    //   <Center
    //     sx={{
    //       height: {
    //         xs: '100 %',
    //         sm: '100vh',
    //       },
    //       background: `url(${lavanda}) center/cover`,
    //       py: 2,
    //     }}
    //   >
    //     <Paper
    //       elevation={6}
    //       sx={{
    //         width: { xs: 300, sm: 500, md: 600 },
    //         borderRadius: 5,
    //         p: { xs: 1, sm: 3 },
    //         boxShadow: '-3px -2px 20px 1px #202020',
    //         display: 'flex',
    //         flexDirection: 'column',
    //       }}
    //     >
    //       <IconButton
    //         sx={{ display: 'flex', alignSelf: 'flex-end' }}
    //         onClick={() => navigate('/')}
    //       >
    //         <Close />
    //       </IconButton>
    //       {pathname === '/login' ? (
    //         <Login
    //           // setEmail={setEmail}
    //           // setPassword={setPassword}
    //           navigate={navigate}
    //           register={register}
    //           errors={errors}
    //         />
    //       ) : pathname === '/register' ? (
    //         <Register
    //           firstName={firstName}
    //           setFirstName={setFirstName}
    //           lastName={lastName}
    //           setLastName={setLastName}
    //           setDelivery={setDelivery}
    //           setLocality={setLocality}
    //           setDepartment={setDepartment}
    //           setEmail={setEmail}
    //           setPassword={setPassword}
    //           setConfirmPassword={setConfirmPassword}
    //           setValues={setValues}
    //           values={values}
    //           delivery={delivery}
    //           locality={locality}
    //           department={department}
    //           navigate={navigate}
    //           setForm={setForm}
    //         />
    //       ) : null}
    //     </Paper>
    //   </Center>
    // </form>
    <form>AuthRoot</form>
  );
};

export default AuthRoot;
