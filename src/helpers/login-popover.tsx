import { FC, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@mui/material';
import { Person } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { loginActions, logoutActions } from '../common/moks';
import uuid from 'react-uuid';
import { useAdminOrUser } from '../utils/hooks';

const LoginPopover: FC = (): JSX.Element => {
  const navigate = useNavigate();

  // const unLoggedUser = useUnLoggedUser();
  const loggedUser = useAdminOrUser();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ pointerEvents: 'auto' }} onMouseLeave={handlePopoverClose}>
      <Box
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
      >
        <IconButton sx={{ color: yellow[500] }}>
          <Person />
        </IconButton>
      </Box>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <List sx={{ pointerEvents: 'auto' }}>
          {(loggedUser ? logoutActions : loginActions).map((action) => (
            <Fragment key={uuid()}>
              <ListItemButton onClick={() => navigate(action.path)}>
                <ListItemIcon>{action.icon}</ListItemIcon>
                <ListItemText primary={action.text} />
              </ListItemButton>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default LoginPopover;
