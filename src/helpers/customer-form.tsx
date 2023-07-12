import { FC, useState } from 'react';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { ILocal, IPhoneMask } from '../types';
import PhoneFormat from '../helpers/phone-format';
import { useAppSelector, useAuth } from '../utils/hooks';
import { EditNote, NavigateNext } from '@mui/icons-material';
import uuid from 'react-uuid';

const CustomerForm: FC<{
  sign: boolean;
  setSign: (value: boolean) => void;
  setGrow: (value: boolean) => void;
  open: boolean;
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
  setLocality: (value: ILocal | null) => void;
  customerInputs: JSX.Element;
}> = ({
  setGrow,
  sign,
  setSign,
  open,
  values,
  setValues,
  setLocality,
  customerInputs,
}): JSX.Element => {
  const auth = useAuth();
  const theme = useTheme();
  const bottom = `1px solid ${theme.palette.text.secondary}`;
  const user = useAppSelector((state) => state.auth.user.userData);

  const [update, setUpdate] = useState(true);

  return (
    <Stack>
      {open &&
        (auth ? (
          update ? (
            <Stack spacing={2} sx={{ mt: 2 }}>
              {Object.values(user)
                .slice(1, -2)
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
                  mt: 2,
                  display: 'flex',
                }}
                onClick={() => {
                  setLocality(null);
                  setGrow(false);
                  setTimeout(() => {
                    setUpdate(false);
                    setGrow(true);
                  }, 300);
                }}
              >
                Змінити дані
              </Button>
            </Stack>
          ) : (
            <Stack spacing={2} sx={{ mt: 2 }}>
              <PhoneFormat values={values} setValues={setValues} />
              {customerInputs}
            </Stack>
          )
        ) : (
          <>
            <Box
              sx={{
                my: 2,
                py: 1,
                borderBottom: bottom,
              }}
            >
              <Typography>{values.textmask}</Typography>
            </Box>
            {customerInputs}
          </>
        ))}
      {!sign && open && (
        <Button
          sx={{ borderRadius: 5, mt: 2, display: 'flex' }}
          endIcon={<NavigateNext />}
          type='submit'
          variant='contained'
          onClick={() => {
            setGrow(false);
            setTimeout(() => {
              setSign(true);
              setUpdate(false);
              setGrow(true);
            }, 300);
          }}
        >
          Далі
        </Button>
      )}
    </Stack>
  );
};

export default CustomerForm;
