import { FC, useEffect, useState } from 'react';

import { Stack, Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import { IDepartNP, ILocal, IPropsNovaPoshta } from '../../types';
import SearchLocality from '../../helpers/seach-locality';

const NovaPoshta: FC<IPropsNovaPoshta> = ({
  locality,
  setLocality,
  department,
  setDepartment,
}): JSX.Element => {
  const [search, setSearch] = useState('');
  const [locals, setLocals] = useState<ILocal[]>([]);
  const [departs, setDeparts] = useState<string[]>([]);
  // console.log(locality);

  useEffect(() => {
    axios
      .post(`https://api.novaposhta.ua/v2.0/json/Address/getCities`, {
        apiKey: '90a376cfc91d1decf5363be40688f127',
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          FindByString: search.length > 1 ? search : '1',
          Limit: 500,
        },
      })
      .then((res) =>
        setLocals(
          res.data.data.map((local: ILocal) => {
            return {
              label: `${local.SettlementTypeDescription} ${
                local.Description
              }  ${
                // local.Description.indexOf('обл') < 0
                local.Description.indexOf('обл') === -1
                  ? '(' + local.AreaDescription + ' обл.)'
                  : ''
              }`,
              Ref: local.Ref,
            };
          })
        )
      );
  }, [search]);

  useEffect(() => {
    axios
      .post(
        `https://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses`,
        {
          apiKey: '90a376cfc91d1decf5363be40688f127',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: locality ? locality.Ref : '1',
            FindByString: department,
            Limit: 500,
          },
        }
      )
      .then((res) =>
        setDeparts(
          res.data.data.map((departNP: IDepartNP) => {
            return {
              label: departNP.Description,
            };
          })
        )
      );
  }, [locality, department]);

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

      {locality && (
        <Autocomplete
          value={department}
          inputValue={department.replace(
            /[^БВГҐДЖЗКЛМНПРСТФХЦЧШЩЙАЕЄИІЇОУЮЯбвгґджзклмнпрстфхцчшщйаеєиіїоуюяь .,№0-9]/gi,
            ''
          )}
          onInputChange={(e, newInputValue: string) =>
            setDepartment(
              newInputValue.replace(
                /[^БВГҐДЖЗКЛМНПРСТФХЦЧШЩЙАЕЄИІЇОУЮЯбвгґджзклмнпрстфхцчшщйаеєиіїоуюяь .,№0-9]/gi,
                ''
              )
            )
          }
          options={departs}
          isOptionEqualToValue={(option: any) => option.label}
          renderInput={(params) => (
            <TextField
              variant='standard'
              label='Відділення'
              placeholder='Для пошуку введіть номер або вулицю відділення'
              {...params}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default NovaPoshta;
