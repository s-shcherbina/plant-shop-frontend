import { Autocomplete, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { IPropsDelivery } from '../../types';
import NovaPoshta from './nova-posta';
import UkrPoshta from './ukr-posta';

const Delivery: FC<IPropsDelivery> = ({
  delivery,
  setDelivery,
  locality,
  setLocality,
  department,
  setDepartment,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <Autocomplete
        fullWidth
        options={['Нова пошта', 'Укрпошта']}
        value={delivery}
        onChange={(e, newValue: string | null) => {
          setDelivery(newValue);
          setLocality(null);
          setDepartment('');
        }}
        inputValue={inputValue}
        onInputChange={(e, newInputValue: string) => {
          setInputValue(
            newInputValue.replace(
              /[^A-Za-zБВГҐДЖЗКЛМНПРСТФХЦЧШЩЙАЕЄИІЇОУЮЯбвгґджзклмнпрстфхцчшщйаеєиіїоуюяь -]/gi,
              ''
            )
          );
        }}
        onBlur={() => setDelivery(inputValue)}
        freeSolo
        renderInput={(params) => (
          <TextField
            variant='standard'
            label='Доставка'
            placeholder='Виберіть або введіть іншу службу доставки'
            {...params}
          />
        )}
      />
      {delivery &&
        (delivery === 'Нова пошта' ? (
          <NovaPoshta
            locality={locality}
            setLocality={setLocality}
            department={department}
            setDepartment={setDepartment}
          />
        ) : (
          <UkrPoshta
            delivery={delivery}
            locality={locality}
            setLocality={setLocality}
            department={department}
            setDepartment={setDepartment}
          />
        ))}
    </>
  );
};

export default Delivery;
