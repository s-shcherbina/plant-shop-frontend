import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, List, useTheme } from '@mui/material';
import { groupsSideBar, navMenu } from '../common/moks';
import uuid from 'react-uuid';
import SideBarButton from '../helpers/side-bar-button';

const SideBar: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();

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
      {groupsSideBar.map((item) => (
        <SideBarButton
          key={uuid()}
          pathname={pathname}
          path={item.path}
          // icon={<LocalFlorist />}
          name={item.name}
          click={() => localStorage.removeItem('token')}
        />
      ))}
      <Divider sx={{ m: 2 }} />
      {navMenu.map((item) => (
        <SideBarButton
          key={uuid()}
          pathname={pathname}
          path={item.path}
          name={item.name}
          icon={item.icon}
          click={() => localStorage.removeItem('token')}
        />
      ))}
      {/* <SideBarButton
              pathname={pathname}
              path={logout.path}
              icon={logout.icon}
              name={logout.name}
              click={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('name');
              }}
            /> */}
    </List>
  );
};

export default SideBar;
