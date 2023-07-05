import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, List, Stack, useTheme } from '@mui/material';
import { groupsSideBar, navMenu } from '../common/moks';
import uuid from 'react-uuid';
import SideBarButton from '../helpers/side-bar-button';
import GroupButton from '../helpers/group-button';

const SideBar: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const [color, setColor] = useState('');

  return (
    // <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ m: 'auto' }}>
    //   <ChevronLeftOutlined />
    // </IconButton>

    <List
      sx={{
        bgcolor: theme.palette.action.hover,
        borderRadius: 2,
        width: '100%',
      }}
    >
      {/* {navMenu.map((item) => (
        <SideBarButton
          key={uuid()}
          pathname={pathname}
          path={item.path}
          name={item.name}
          icon={item.icon}
          click={() => localStorage.removeItem('token')}
        />
      ))}
      <Divider sx={{ m: 1 }} />{' '} */}
      {groupsSideBar.map((group) => (
        <GroupButton
          key={group.name}
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          color={color}
          setColor={setColor}
          group={group.name}
        />
      ))}
    </List>
  );
};

export default SideBar;
