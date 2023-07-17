import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, TextField } from '@mui/material';
import { ILocal, IPropsUkrPoshta } from '../../types';
import SearchLocality from '../../helpers/seach-locality';

const UkrPoshta: FC<IPropsUkrPoshta> = ({
  delivery,
  locality,
  setLocality,
  department,
  setDepartment,
}): JSX.Element => {
  const [search, setSearch] = useState('');
  const [locals, setLocals] = useState<ILocal[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `https://api.novaposhta.ua/v2.0/json/Address/searchSettlements/`,
          {
            apiKey: '90a376cfc91d1decf5363be40688f127',
            modelName: 'Address',
            calledMethod: 'searchSettlements',
            methodProperties: {
              CityName: search.length > 1 ? search : '',
              Limit: 500,
            },
          }
        );
        setLocals(
          data.data[0].Addresses.map((adress: any) => {
            return { label: adress.Present };
          })
        );
      } catch (e: any) {
        console.error(e.response?.data?.message);
      }
    })();
  }, [search]);

  return (
    <Stack spacing={2}>
      <SearchLocality
        locality={locality}
        setLocality={setLocality}
        search={search}
        setSearch={setSearch}
        locals={locals}
        setDepartment={setDepartment}
      />

      {locality &&
        (delivery === 'Укрпошта' ? (
          <TextField
            size='small'
            variant='standard'
            label='індекс'
            placeholder='Індекс відділення укрпошти(5 цифр)'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        ) : (
          <TextField
            size='small'
            variant='standard'
            label='№ відділення'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        ))}
    </Stack>
  );
};

export default UkrPoshta;
