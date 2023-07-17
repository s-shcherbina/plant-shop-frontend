import { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import Delivery from './delivery';
import { ILocal, IPhoneMask } from '../types';
import { instance, instanceAuth } from '../utils/axios';
import {
  useAppDispatch,
  useAppSelector,
  useAuth,
  useUnLoggedUser,
} from '../utils/hooks';
import { login } from '../store/slices/auth';
import PhoneForm from '../helpers/phone-form';
import CustomerForm from '../helpers/customer-form';
import PhoneFormat from '../helpers/phone-format';
import { NavigateNext } from '@mui/icons-material';
import uuid from 'react-uuid';

export const regexp =
  /^(\+38\(0)(39|50|63|66|67|68|73|89|9[1-9])\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const Customer: FC<{
  sign: boolean;
  setSign: (value: boolean) => void;
  setGrow: (value: boolean) => void;
}> = ({ setGrow, sign, setSign }): JSX.Element => {
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const unLoggedUser = useUnLoggedUser();
  const theme = useTheme();
  const bottom = `1px solid ${theme.palette.text.secondary}`;
  const user = useAppSelector((state) => state.auth.user.userData);

  const [values, setValues] = useState<IPhoneMask>({
    textmask: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');

  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const loginCustomer = async (e: any) => {
    e.preventDefault();
    if (regexp.test(values.textmask)) {
      try {
        const customer = await instance.post('auth/login_customer', {
          phone: values.textmask,
        });
        localStorage.setItem('token', customer.data.accessToken);
        dispatch(login(customer.data));

        setDelivery(customer.data.userData.delivery);
        setLocality(customer.data.userData.locality);
        setDepartment(customer.data.userData.department);
        setFirstName(customer.data.userData.firstName);
        setLastName(customer.data.userData.lastName);
      } catch (e: any) {
        console.error(e.response.data?.message);
      }
    }
  };

  const customerData = {
    phone: values.textmask,
    firstName,
    lastName,
    department,
    locality: locality?.label ? locality.label : locality,
    delivery,
  };

  const registerCustomer = async (e: any) => {
    e.preventDefault();
    console.log(customerData);
    try {
      const newCustomer = await instance.post(
        'auth/register_customer',
        customerData
      );
      localStorage.setItem('token', newCustomer.data.accessToken);

      dispatch(login(newCustomer.data));
    } catch (e: any) {
      console.error(e.response.data?.message);
    }
  };

  const customerForm = async (e: any) => {
    e.preventDefault();
    console.log(customerData);
    if (auth) {
      try {
        const updateCustomer = await instanceAuth.patch(
          'auth/customer',
          customerData
        );
        localStorage.setItem('token', updateCustomer.data.accessToken);

        dispatch(login(updateCustomer.data));
      } catch (e: any) {
        console.error(e.response.data?.message);
      }
    } else {
      try {
        const newCustomer = await instance.post(
          'auth/register_customer',
          customerData
        );
        localStorage.setItem('token', newCustomer.data.accessToken);

        dispatch(login(newCustomer.data));
      } catch (e: any) {
        console.error(e.response.data?.message);
      }
    }
  };

  const customerInputs = (
    <Stack spacing={2}>
      <TextField
        value={firstName}
        variant='standard'
        label={`Ім'я`}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        value={lastName}
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
  );

  const buttonNext = (click: () => void) => (
    <Button
      fullWidth
      sx={{ borderRadius: 5, mt: 2 }}
      endIcon={<NavigateNext />}
      type='submit'
      variant='contained'
      onClick={click}
    >
      Далі
    </Button>
  );

  return (
    <>
      {!auth ? (
        <Stack sx={{ pt: 2 }} spacing={2}>
          <form onSubmit={loginCustomer}>
            <PhoneFormat values={values} setValues={setValues} />
            {!open &&
              buttonNext(() => {
                if (regexp.test(values.textmask)) {
                  setGrow(false);
                  setTimeout(() => {
                    setOpen(true);
                    setGrow(true);
                  }, 300);
                }
              })}
          </form>
          <form onSubmit={registerCustomer}>
            {open && (
              <Stack>
                <>{customerInputs}</>
                <>
                  {buttonNext(() => {
                    setGrow(false);
                    setTimeout(() => {
                      setSign(true);
                      setGrow(true);
                    }, 300);
                  })}
                </>
              </Stack>
            )}
          </form>
        </Stack>
      ) : !update ? (
        <Stack spacing={2} sx={{ mt: 2 }}>
          {user &&
            Object.values(user)
              .slice(1, -2)
              .map((item) => (
                <Box
                  key={uuid()}
                  sx={{
                    p: 1,
                    borderBottom: bottom,
                  }}
                >
                  <Typography>{item}</Typography>
                </Box>
              ))}
        </Stack>
      ) : null}
      {!sign &&
        auth &&
        buttonNext(() => {
          setGrow(false);
          setTimeout(() => {
            setSign(true);
            setUpdate(false);
            setGrow(true);
          }, 300);
        })}
    </>
  );
};

export default Customer;
