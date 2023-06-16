import { Box, Button, Divider, Menu, MenuItem, Popover } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { subgroups } from '../common/moks';

const GroupButton: FC<{
  color: string;
  setColor: (value: string) => void;
  group: string;
}> = ({ color, setColor, group }): JSX.Element => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    // <div>
    //   <Button
    //     aria-describedby={id}
    //     color={color === group ? 'warning' : 'primary'}
    //     sx={{
    //       borderRadius: 5,
    //       px: 2.5,
    //       '&:hover': { color: 'darkorange !important' },
    //     }}
    //     onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
    //       setAnchorEl(event.currentTarget);
    //       setColor(group);
    //       navigate('/group');
    //     }}
    //   >
    //     {group}
    //   </Button>
    //   <Popover
    //     id={id}
    //     open={open}
    //     anchorEl={anchorEl}
    //     onClose={handleClose}
    //     anchorOrigin={{
    //       vertical: 'bottom',
    //       horizontal: 'left',
    //     }}
    //   >
    //     <h1>Popover</h1>
    //   </Popover>
    // </div>

    <PopupState variant='popover'>
      {(popupState: any) => {
        const selectSubgroups = (subgroups: { name: string; path: string }[]) =>
          subgroups.map((subgroup) => (
            <MenuItem
              key={subgroup.name}
              onClick={() => {
                popupState.close();
                navigate('/subgroup');
              }}
              divider
              sx={{ p: 1 }}
            >
              <Box sx={{ pl: 2 }}>{subgroup.name}</Box>
            </MenuItem>
          ));
        return (
          <>
            <Button
              color={color === group ? 'warning' : 'primary'}
              sx={{
                borderRadius: 5,
                px: 2.5,
                '&:hover': { color: 'darkorange !important' },
              }}
              onFocus={() => {
                setColor(group);
                navigate('/group');
              }}
              {...bindTrigger(popupState)}
            >
              {group}
            </Button>

            <Menu {...bindMenu(popupState)}>
              <Divider />
              {selectSubgroups(subgroups)}
            </Menu>
          </>
        );
      }}
    </PopupState>
  );
};

export default GroupButton;
