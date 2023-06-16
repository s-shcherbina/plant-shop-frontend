import { Person } from '@mui/icons-material';
import { Box, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginActions, logoutActions } from '../common/moks';
import uuid from 'react-uuid';
import { yellow } from '@mui/material/colors';
// import { PopupIconButton } from '.';
// import { useAdmin, useAuth } from '../utils/hooks';

const LoginButton: FC = (): JSX.Element => {
  const navigate = useNavigate();
  // const auth = useAuth();
  // const admin = useAdmin();
  const auth = true;

  return (
    <PopupState variant='popover'>
      {(popupState: any) => {
        const signActions = (
          actions: { text: string; icon: JSX.Element; path: string }[]
        ) =>
          actions.map((item) => (
            <MenuItem
              key={uuid()}
              onClick={() => {
                popupState.close();
                navigate(item.path);
              }}
              divider
              sx={{ p: 1 }}
            >
              {item.icon}
              <Box sx={{ pl: 2 }}>{item.text}</Box>
            </MenuItem>
          ));
        return (
          <>
            <IconButton
              sx={{ color: yellow[500] }}
              // onFocus={() => navigate('/care')}
              {...bindTrigger(popupState)}
            >
              <Person />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <Divider />
              {auth ? signActions(logoutActions) : signActions(loginActions)}
              {/* ? signActions(logoutActions).slice(0, -1)
              {admin && signActions(logoutActions).slice(-1)} */}
            </Menu>
          </>
        );
      }}
    </PopupState>
  );
};

export default LoginButton;
