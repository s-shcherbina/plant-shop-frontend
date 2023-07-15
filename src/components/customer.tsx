import { FC, useEffect, useState } from 'react';
import { Stack, TextField } from '@mui/material';
import Delivery from './delivery';
import { ILocal, IPhoneMask } from '../types';
import { instance, instanceAuth } from '../utils/axios';
import { useAppDispatch, useAuth } from '../utils/hooks';
import { login } from '../store/slices/auth';
import PhoneForm from '../helpers/phone-form';
import CustomerForm from '../helpers/customer-form';

export const regexp =
  /^(\+38\(0)(39|50|63|66|67|68|73|89|9[1-9])\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const Customer: FC<{
  sign: boolean;
  setSign: (value: boolean) => void;
  setGrow: (value: boolean) => void;
}> = ({ setGrow, sign, setSign }): JSX.Element => {
  const dispatch = useAppDispatch();
  const auth = useAuth();

  const [values, setValues] = useState<IPhoneMask>({
    textmask: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [delivery, setDelivery] = useState<string | null>(null);
  const [locality, setLocality] = useState<ILocal | null>(null);
  const [department, setDepartment] = useState('');

  const [open, setOpen] = useState(false);

  const phoneForm = async (e: any) => {
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

  useEffect(() => {
    if (auth) {
      setOpen(true);
    }
  }, [auth]);

  return (
    <Stack>
      <form onSubmit={phoneForm}>
        {!open && (
          <PhoneForm
            setGrow={setGrow}
            setOpen={setOpen}
            values={values}
            setValues={setValues}
          />
        )}
      </form>
      <form onSubmit={customerForm}>
        <CustomerForm
          open={open}
          setGrow={setGrow}
          sign={sign}
          setSign={setSign}
          values={values}
          setValues={setValues}
          setLocality={setLocality}
          customerInputs={customerInputs}
        />
      </form>
    </Stack>
  );
};

export default Customer;
