// import { Button, Stack, TextField, Typography } from '@mui/material';
// import { FC, useState } from 'react';
// import { IPropsRegister } from '../../types';
// import CustomerData from '../../components/customer-data';
// // import { IPropsRegister } from '../../types/auth';
// // import CustomerData from '../../components/customer-data';

// const Register: FC<IPropsRegister> = ({
//   firstName,
//   setFirstName,
//   lastName,
//   setLastName,
//   setEmail,
//   setPassword,
//   setConfirmPassword,
//   delivery,
//   setDelivery,
//   locality,
//   setLocality,
//   department,
//   setDepartment,
//   values,
//   setValues,
//   navigate,
//   form,
//   setForm,
// }): JSX.Element => {
//   const [formPhone, setFormPhone] = useState(false);

//   return (
//     <Stack spacing={2}>
//       <Typography variant='h4' textAlign='center' sx={{ mt: -2 }}>
//         Реєстрація
//       </Typography>
//       <CustomerData
//         firstName={firstName}
//         setFirstName={setFirstName}
//         lastName={lastName}
//         setLastName={setLastName}
//         setDelivery={setDelivery}
//         setLocality={setLocality}
//         setDepartment={setDepartment}
//         setValues={setValues}
//         values={values}
//         delivery={delivery}
//         locality={locality}
//         department={department}
//         formPhone={formPhone}
//       />
//       {form && (
//         <>
//           <TextField
//             size='small'
//             variant='standard'
//             label='E-mail'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             size='small'
//             variant='standard'
//             label='Пароль'
//             // type='password'
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <TextField
//             size='small'
//             variant='standard'
//             label='Підтвердження пароля'
//             // type='password'
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </>
//       )}
//       <Stack alignItems={'center'}>
//         <Button
//           sx={{
//             borderRadius: 5,
//             width: { xs: '100%', sm: '60%' },
//             mt: 1,
//             mb: 1,
//           }}
//           type='submit'
//           variant='contained'
//           onClick={() =>
//             !formPhone && !form
//               ? setFormPhone(true)
//               : formPhone && !form
//               ? setForm(true)
//               : setFormPhone(false)
//           }
//         >
//           {formPhone ? 'Peєстрацiя' : 'Далі'}
//         </Button>
//         <Typography variant='body1'>
//           Зареєстровані?
//           <Button
//             size='small'
//             sx={{ borderRadius: 5, mx: 1 }}
//             onClick={() => navigate('/login')}
//           >
//             Вхід
//           </Button>
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// };

// export default Register;

const Register = () => {
  return <div>register</div>;
};

export default Register;
