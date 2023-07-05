import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  // useTheme,
} from '@mui/material';
import { FC, Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { subgroups } from '../common/moks';
// import { blue } from '@mui/material/colors';

interface IOrigin {
  vertical: number | 'center' | 'bottom' | 'top';
  horizontal: number | 'center' | 'right' | 'left';
}

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
  // const theme = useTheme();
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
          <ListItem>
            <ListItemButton
              sx={{
                my: 1.6,
                height: '2.4rem',
                textAlign: 'center !important',
                borderRadius: 5,
                // bgcolor:
                //   color === group && pathname === '/group'
                //     ? `${blue[500]} !important`
                //     : '',
                // color:
                //   color === group
                //     ? '#FFF !important'
                //     : theme.palette.text.secondary,
                // '&:hover': {
                //   bgcolor: `${blue[500]} !important`,
                //   color: '#FFF',
                // '& .MuiSvgIcon-root': {
                //   color: '#FFF !important',
                // },
                // },
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
        id='mouse-over-popover'
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
