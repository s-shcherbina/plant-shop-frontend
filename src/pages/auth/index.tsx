import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center } from '../../helpers';
import { Fade, Grow, IconButton, Paper, Zoom, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import imgMain from '../../assets/img-main.jpg';
import Login from './login ';
// import Register from './register';
import { ILocal, IPhoneMask } from '../../types';
import { instance, instanceAuth } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import { login } from '../../store/slices/auth';
import CustomerData from '../../components/customer-data';

const AuthRoot: FC = (): JSX.Element => {
  // const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<IPhoneMask>({
    textmask: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formPhone, setFormPhone] = useState(false);
  const [form, setForm] = useState(false);

  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState('');

  // const test_data = [
  //   '+38(039) 911-22-33',
  //   '+38(063) 911-22-33',
  //   '+38(098) 223-34-45',
  //   '+38(066) 222-33-44',
  //   '+38(050) 122-33-45',
  //   '+38(067) 911-22-33',
  //   '+38(073) 911-22-33',
  //   '+38(089) 223-34-45',
  //   '+38(091) 222-33-44',
  //   '+38(092) 122-33-45',
  //   '38(011) 223-34-45',
  //   '+38(092) 122-33-4',
  //   '+38012345678',
  //   '+390123456789',
  //   '1234567890',
  // ];

  // const regexp =
  //   /^(\+38\(0)(39|50|63|66|67|68|73|89|9[1-9])\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  // for (const t of test_data) {
  //   console.log(t, ' --- ', regexp.test(t));
  // }

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    if (pathname === '/login') {
      const loginData = { email, password };
      try {
        const user = await instance.post('auth/login', loginData);
        localStorage.setItem('token', user.data.userData.accessToken);

        console.log(user);

        dispatch(login(user.data));
        navigate('/');
      } catch (e: any) {
        console.error(e.response.data.message);
      }
    }
    if (pathname === '/register') {
      const loginPhone = { phone: values.textmask };
      if (!form) {
        try {
          const user = await instance.post('auth/login_customer', loginPhone);
          localStorage.setItem('token', user.data.userData.accessToken);

          console.log(user.data);

          setDelivery(user.data.userData.delivery);
          setLocality(user.data.userData.locality);
          setDepartment(user.data.userData.department);
          setFirstName(user.data.userData.firstName);
          setLastName(user.data.userData.lastName);
          setAuth(true);
          setToken(user.data.userData.accessToken);
        } catch (e: any) {
          console.error(e.response.data.message);
        }
        console.log(lastName);
        console.log(form);
      }
      const registerData = {
        phone: values.textmask,
        firstName,
        lastName,
        department,
        locality: locality?.label ? locality.label : locality,
        delivery,
        email,
        password,
      };
      // console.log(user.data);
      const accessToken = { token };
      console.log(registerData);
      console.log(accessToken);
      console.log(localStorage.getItem('token'));
      if (form) {
        if (password === confirmPassword) {
          if (auth) {
            console.log(registerData);
            console.log(localStorage.getItem('token'));

            const updatedUser = await instanceAuth.patch(
              'auth/user',
              registerData
            );
            dispatch(login(updatedUser.data));
            setForm(false);
            navigate('/');
          } else {
            try {
              const newUser = await instance.post(
                'auth/register_user',
                registerData
              );
              console.log(newUser);

              dispatch(login(newUser.data));
              setForm(false);
              navigate('/');
            } catch (e: any) {
              console.error(e.response.data.message);
            }
          }
        } else {
          // throw new Error(AppErrors.PasswordsDoNotMatch);
          console.error('Паролі не співпали');
        }
      }
    }
  };

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
  // const registerData = {
  //   phone: values.textmask,
  //   firstName,
  //   lastName,
  //   department,
  //   locality: locality?.label ? locality.label : locality,
  //   delivery,
  //   email,
  //   password,
  // };
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
    // <form onSubmit={handleSubmitForm}>
    //
    // <Grow in={true}>style={{ transitionDelay: '10ms' }}
    // <Zoom in={true}>
    <Grow in={true} {...{ timeout: 500 }}>
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
        {/* <Grow in={true} {...{ timeout: 300 }}>
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
            </IconButton> */}
        {pathname === '/login' ? (
          <Login
            setEmail={setEmail}
            setPassword={setPassword}
            navigate={navigate}
            // register={register}
            // errors={errors}
          />
        ) : pathname === '/register' ? (
          <>
            <CustomerData
            // firstName={firstName}
            // setFirstName={setFirstName}
            // lastName={lastName}
            // setLastName={setLastName}
            // setDelivery={setDelivery}
            // setLocality={setLocality}
            // setDepartment={setDepartment}
            // setValues={setValues}
            // values={values}
            // delivery={delivery}
            // locality={locality}
            // department={department}
            // formPhone={formPhone}
            // setFormPhone={setFormPhone}
            />
          </>
        ) : // <Register
        //   firstName={firstName}
        //   setFirstName={setFirstName}
        //   lastName={lastName}
        //   setLastName={setLastName}
        //   setDelivery={setDelivery}
        //   setLocality={setLocality}
        //   setDepartment={setDepartment}
        //   setEmail={setEmail}
        //   setPassword={setPassword}
        //   setConfirmPassword={setConfirmPassword}
        //   setValues={setValues}
        //   values={values}
        //   delivery={delivery}
        //   locality={locality}
        //   department={department}
        //   navigate={navigate}
        //   form={form}
        //   setForm={setForm}
        // />
        null}
        {/* </Paper> */}
        {/* </Zoom> */}
        {/* </Grow> */}
      </Center>
      {/* </Zoom> */}
    </Grow>
  );
};

export default AuthRoot;
