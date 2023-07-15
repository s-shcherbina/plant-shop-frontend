import { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { blue, yellow } from '@mui/material/colors';
import uuid from 'react-uuid';
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Divider,
  Badge,
  useTheme,
  Button,
} from '@mui/material';
import {
  Phone,
  Menu,
  Brightness7,
  Brightness4,
  Notifications,
  AdminPanelSettingsSharp,
} from '@mui/icons-material';
import { ColorModeContext } from '../../App';
import { Flex } from '../../helpers';
import { navMenu } from '../../common/moks';
import DrawerCatalog from '../../helpers/drawer-catalog';
import LoginPopover from '../../helpers/login-popover';
import { useAdmin, useAuth } from '../../utils/hooks';

const TopBar: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [catalogOpen, setCatalogOpen] = useState(false);
  const catalogToggle = () => setCatalogOpen(!catalogOpen);

  useEffect(() => {
    navigate(pathname);
  }, [pathname, navigate]);

  return (
    <>
      <AppBar
        position='static'
        sx={{ bgcolor: blue[500], color: yellow[500], p: 0.5 }}
      >
        <Box
          display={{ xs: 'flex', sm: 'none' }}
          justifyContent={'space-between'}
        >
          <IconButton sx={{ color: yellow[500] }} onClick={catalogToggle}>
            <Menu />
          </IconButton>
          <Flex overflow='auto'>
            <Flex>
              <Phone fontSize='small' sx={{ mt: 1.3 }} />
              <Typography noWrap variant='h6' sx={{ mt: 0.5, ml: 0.5 }}>
                (066) 611-74-29
              </Typography>
            </Flex>
          </Flex>
          <LoginPopover />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            px: { sm: 1, lg: 2 },
            height: '2.4rem',
          }}
        >
          <Flex>
            <IconButton
              sx={{
                color: yellow[500],
                display: { xs: 'none', sm: 'flex', md: 'none' },
              }}
              onClick={catalogToggle}
            >
              <Menu />
            </IconButton>
            {navMenu.map((item, index) => (
              <Button
                key={uuid()}
                startIcon={item.icon}
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  display: index > 2 ? { sm: 'none', md: 'flex' } : 'flex',
                  textTransform: 'none',
                  borderRadius: 5,
                  color: yellow[500],
                  px: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: pathname === item.path ? 700 : 400,
                    textDecoration:
                      pathname === item.path ? 'underline' : 'none',
                    '&:hover': { fontWeight: 700, textDecoration: 'underline' },
                  }}
                >
                  {item.name}
                </Typography>
              </Button>
            ))}
          </Flex>
          <Flex>
            {/* {admin && (
              <IconButton
                sx={{ color: yellow[500] }}
                onClick={() => navigate('/admin')}
              >
                <AdminPanelSettingsSharp />
              </IconButton>
            )} */}
            <IconButton sx={{ color: yellow[500] }}>
              <Badge color='warning' badgeContent={1}>
                <Notifications fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ color: yellow[500] }}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7 fontSize='small' />
              ) : (
                <Brightness4 fontSize='small' />
              )}
            </IconButton>
            <Box
              sx={{
                my: 1,
                mx: 0.5,
                bgcolor: yellow[500],
                display: { sm: 'none', md: 'flex' },
              }}
            >
              <Divider orientation='vertical' />
            </Box>
            <LoginPopover />
          </Flex>
        </Box>
      </AppBar>
      <DrawerCatalog
        catalogOpen={catalogOpen}
        catalogToggle={catalogToggle}
        navigate={navigate}
      />
    </>
  );
};

export default TopBar;
