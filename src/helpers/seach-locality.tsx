import { Autocomplete, TextField } from '@mui/material';
import { FC } from 'react';
import { ILocal, ISearchLocality } from '../types';

const SearchLocality: FC<ISearchLocality> = ({
  locality,
  setLocality,
  search,
  setSearch,
  locals,
  setDepartment,
}): JSX.Element => {
  return (
    <Autocomplete
      size='small'
      value={locality}
      onChange={(e, newValue: ILocal | null) => {
        setLocality(newValue);
        setDepartment('');
      }}
      inputValue={search.replace(
        /[^БВГҐДЖЗКЛМНПРСТФХЦЧШЩЙАЕЄИІЇОУЮЯбвгґджзклмнпрстфхцчшщйаеєиіїоуюяь .-]/gi,
        ''
      )}
      onInputChange={(e, newInputValue: string) => {
        setSearch(
          newInputValue.replace(
            /[^БВГҐДЖЗКЛМНПРСТФХЦЧШЩЙАЕЄИІЇОУЮЯбвгґджзклмнпрстфхцчшщйаеєиіїоуюяь .-]/gi,
            ''
          )
        );
      }}
      options={locals}
      isOptionEqualToValue={(option: any) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={'Населений пункт'}
          variant='standard'
          placeholder='Для пошуку введіть минимум 2 літери'
        />
      )}
    />
  );
};

export default SearchLocality;
