import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
} from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { subgroups } from '../common/moks';
import { IOrigin } from '../types';

// interface IOrigin {
//   vertical: number | 'center' | 'bottom' | 'top';
//   horizontal: number | 'center' | 'right' | 'left';
// }

const GroupButton: FC<{
  color: string;
  setColor: (value: string) => void;
  group: string;
  anchorOrigin: IOrigin;
  transformOrigin: IOrigin;
}> = ({
  color,
  setColor,
  group,
  anchorOrigin,
  transformOrigin,
}): JSX.Element => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const click = (path: string) => {
    setColor(group);
    handlePopoverClose();
    navigate(path);
  };

  return (
    <Box sx={{ pointerEvents: 'auto' }} onMouseLeave={handlePopoverClose}>
      <Box
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
      >
        {anchorOrigin.horizontal === 'right' ? (
          <ListItem sx={{ height: '9vh' }}>
            <ListItemButton
              sx={{
                height: '2.4rem',
                textAlign: 'center !important',
                borderRadius: 5,
              }}
              onClick={() => click('/group')}
            >
              <ListItemText primary={group} />
            </ListItemButton>
          </ListItem>
        ) : (
          <Button
            color={
              color === group &&
              (pathname === '/group' || pathname === '/subgroup')
                ? 'warning'
                : 'primary'
            }
            sx={{
              borderRadius: 5,
              px: 2.5,
            }}
            onClick={() => click('/group')}
          >
            {group}
          </Button>
        )}
      </Box>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <List sx={{ pointerEvents: 'auto' }}>
          {subgroups.map((subgroup) => (
            <Fragment key={uuid()}>
              <ListItemButton sx={{ my: 1 }} onClick={() => click('/subgroup')}>
                <ListItemText primary={subgroup.name} />
              </ListItemButton>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default GroupButton;
