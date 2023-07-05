import { FC, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  Grow,
  IconButton,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Zoom,
  createTheme,
  useTheme,
} from '@mui/material';
import Delivery from './delivery';
import { ILocal, IPhoneMask, IPropsCustomerData } from '../types';
import PhoneFormat from '../helpers/phone-format';
import { instance, instanceAuth } from '../utils/axios';
import { useAppDispatch, useAppSelector, useAuth } from '../utils/hooks';
import { login } from '../store/slices/auth';
import { Close, EditNote, NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

const regexp =
  /^(\+38\(0)(39|50|63|66|67|68|73|89|9[1-9])\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;

// const CustomerData: FC<IPropsCustomerData> = (
//   {
// firstName,
// setFirstName,
// lastName,
// setLastName,
// delivery,
// setDelivery,
// locality,
// setLocality,
// department,
// setDepartment,
// values,
// setValues,
// formPhone,
// setFormPhone,
// }
// ): JSX.Element => {
const CustomerData: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [grow, setGrow] = useState(true);
  const [update, setUpdate] = useState(false);

  const [values, setValues] = useState<IPhoneMask>({
    textmask: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');

  const user = useAppSelector((state) => state.auth.user.userData);
  const token = useAppSelector((state) => state.auth.user.accessToken);
  const auth = useAuth();
  const theme = useTheme();
  const bottom = `1px solid ${theme.palette.text.secondary}`;
  // console.log(formPhone);
  // console.log(regexp.test(values.textmask));
  console.log({ phone: values.textmask });
  console.log(auth);
  console.log(user);
  console.log(localStorage.getItem('token'));
  // console.log(user.role.slice(-1));

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    // const loginPhone = { phone: values.textmask };
    if (!form && regexp.test(values.textmask)) {
      try {
        const customer = await instance.post('auth/login_customer', {
          phone: values.textmask,
        });
        localStorage.setItem('token', customer.data.userData.accessToken);

        dispatch(login(customer.data));

        setDelivery(customer.data.userData.delivery);
        setLocality(customer.data.userData.locality);
        setDepartment(customer.data.userData.department);
        setFirstName(customer.data.userData.firstName);
        setLastName(customer.data.userData.lastName);
      } catch (e: any) {
        console.error(e.response.data.message);
      }

      setForm(true);
    }
    const customerData = {
      phone: values.textmask,
      firstName,
      lastName,
      department,
      locality: locality?.label ? locality.label : locality,
      delivery,
    };
    if (form) {
      // if (auth && user.phone !== values.textmask) {
      if (auth) {
        console.log(user);
        const updateCustomer = await instanceAuth.patch(
          'auth/user',
          customerData
        );

        dispatch(login(updateCustomer.data));
      }

      if (!auth) {
        const newCustomer = await instance.post(
          'auth/register_customer',
          customerData
        );
        // localStorage.setItem('token', newCustomer.data.userData.accessToken);

        dispatch(login(newCustomer.data));
        localStorage.setItem('token', token);
      }
    }
  };

  return (
    // /<ThemeProvider theme={theme}>
    <form onSubmit={handleSubmitForm}>
      <Grow in={grow || open} {...{ timeout: 300 }}>
        {/* <Zoom in={formPhone}> */}
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
            onClick={() => {
              setGrow(false);
              setOpen(false);
              setTimeout(() => navigate('/'), 300);
            }}
          >
            <Close />
          </IconButton>
          <Stack
            sx={{
              transition: {
                duration: theme.transitions.duration.complex,
              },
            }}
          >
            {!open && <PhoneFormat values={values} setValues={setValues} />}
            {open &&
              (auth && !update ? (
                user.role.slice(-1) !== 'C' ? (
                  <Box>Dialog!!! Увійдіть</Box>
                ) : user.phone === values.textmask ? (
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {Object.values(user)
                      .slice(1, -1)
                      .map((item) => (
                        <Box
                          key={uuid()}
                          sx={{
                            p: 1,
                            borderBottom: bottom,
                          }}
                        >
                          <Typography>{item}</Typography>{' '}
                        </Box>
                      ))}
                    <Button
                      endIcon={<EditNote />}
                      variant='outlined'
                      sx={{
                        borderRadius: 5,
                        // width: { xs: '100%', sm: '60%' },
                        mt: 2,
                        display: 'flex',
                        // alignSelf: 'center',
                      }}
                      onClick={() => setUpdate(true)}
                    >
                      Змінити дані
                    </Button>
                  </Stack>
                ) : (
                  <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit perferendis doloribus enim quod neque ducimus,
                    error similique reiciendis minima deserunt consequuntur
                    corrupti harum dolorum dolorem in. Vero animi facere porro.
                  </Box>
                )
              ) : (
                <Stack>
                  <Box
                    sx={{
                      mt: 2,
                      p: 1,
                      borderBottom: bottom,
                    }}
                  >
                    <Typography>{values.textmask}</Typography>{' '}
                  </Box>
                  <TextField
                    value={firstName}
                    // size='small'
                    variant='standard'
                    label={`Ім'я`}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    value={lastName}
                    // size='small'
                    variant='standard'
                    label='Прізвище'
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Delivery
                    delivery={delivery}
                    setDelivery={setDelivery}
                    locality={locality}
                    setLocality={setLocality}
                    department={department}
                    setDepartment={setDepartment}
                  />
                </Stack>
              ))}
            <Button
              sx={{
                borderRadius: 5,
                // width: { xs: '100%', sm: '60%' },
                mt: 2,
                display: 'flex',
                // alignSelf: 'center',
              }}
              endIcon={<NavigateNext />}
              type='submit'
              variant='contained'
              onClick={() => {
                if (!open && regexp.test(values.textmask)) {
                  setGrow(false);
                  setTimeout(() => setOpen(true), 300);
                }
                // !open &&
                //   regexp.test(values.textmask) &&

                // : setForm(true);
              }}
              // onClick={() =>
              //   !formPhone && !form
              //     ? setFormPhone(true)
              //     : formPhone && !form
              //     ? setForm(true)
              //     : setFormPhone(false)
              // }
            >
              {/* {open ? 'Наступний крок' : 'Наступний крок'} */}
              {/* {open ? 'Далі' : 'Далі'} */}
              Далі
            </Button>
          </Stack>
          {/* </Grow> */}
        </Paper>
      </Grow>
      {/* </Grow> */}
    </form>
  );
};

export default CustomerData;
