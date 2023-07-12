import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { IPhoneMask } from '../types';
import PhoneFormat from '../helpers/phone-format';
import { NavigateNext } from '@mui/icons-material';

const PhoneForm: FC<{
  regexp: RegExp;
  setGrow: (value: boolean) => void;
  setOpen: (value: boolean) => void;
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
}> = ({ regexp, setGrow, setOpen, values, setValues }): JSX.Element => {
  return (
    <Stack>
      <PhoneFormat values={values} setValues={setValues} />
      <Button
        sx={{ borderRadius: 5, mt: 2, display: 'flex' }}
        endIcon={<NavigateNext />}
        type='submit'
        variant='contained'
        onClick={() => {
          if (regexp.test(values.textmask)) {
            setGrow(false);
            setTimeout(() => {
              setGrow(true);
              setOpen(true);
            }, 300);
          }
        }}
      >
        Далі
      </Button>
    </Stack>
  );
};

export default PhoneForm;
