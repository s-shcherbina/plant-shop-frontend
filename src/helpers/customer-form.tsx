import { FC, useState } from 'react';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { ILocal, IPhoneMask } from '../types';
import PhoneFormat from '../helpers/phone-format';
import { useAppSelector, useAuth, useUnLoggedUser } from '../utils/hooks';
import { EditNote, NavigateNext } from '@mui/icons-material';
import uuid from 'react-uuid';

const CustomerForm: FC<{
  sign: boolean;
  setSign: (value: boolean) => void;
  setGrow: (value: boolean) => void;
  // open: boolean;
  values: IPhoneMask;
  setValues: (values: IPhoneMask) => void;
  setLocality: (value: ILocal | null) => void;
  customerInputs: JSX.Element;
}> = ({
  setGrow,
  sign,
  setSign,
  // open,
  values,
  setValues,
  setLocality,
  customerInputs,
}): JSX.Element => {
  const auth = useAuth();
  const unLoggedUser = useUnLoggedUser();

  const theme = useTheme();
  const bottom = `1px solid ${theme.palette.text.secondary}`;
  const user = useAppSelector((state) => state.auth.user.userData);

  const [update, setUpdate] = useState(false);

  const unEditForm =
    user &&
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
      ));

  console.log(user?.role);
  console.log(auth);
  console.log(unLoggedUser);

  return (
    <Stack>
      {!auth ? (
        <Stack>
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
        </Stack>
      ) : // ) : unLoggedUser ? (
      //   <Stack>У Вас є аккаунт! Увійдіть!</Stack>
      null}
      {!sign && !unLoggedUser && (
        <Button
          sx={{ borderRadius: 5, mt: 2 }}
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
