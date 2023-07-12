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
} from '@mui/icons-material';
// import { navMenu } from '../../common/moks';
// import NavButton from '../helpers/nav-button';
// import DrawerMenu from '../helpers/drawers/drawer-menu';
// import DrawerCatalog from '../helpers/drawers/drawer-catalog';
import { ColorModeContext } from '../../App';
import { Flex } from '../../helpers';
import LoginButton from '../../helpers/login-button';
import { navMenu } from '../../common/moks';
import DrawerCatalog from '../../helpers/drawer-catalog';

// import { useAdmin } from '../../utils/hooks'

const TopBar: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState('');
  // const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  // const menuToggle = () => setMenuOpen(!menuOpen);
  const catalogToggle = () => setCatalogOpen(!catalogOpen);

  useEffect(() => {
    navigate(pathname);
    // setPage(pathname);
  }, [pathname, navigate]);

  return (
    <>
      <AppBar
        position='static'
        sx={{ bgcolor: blue[500], color: yellow[500], p: 1 }}
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
          {/* <IconButton sx={{ color: yellow[500] }} onClick={menuToggle}>
            <MenuOpen />
          </IconButton> */}
          <LoginButton />
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
            {/* <IconButton
              sx={{
                color: yellow[500],
                display: { xs: 'none', sm: 'flex', md: 'none' },
              }}
              onClick={menuToggle}
            >
              <MenuOpen />
            </IconButton> */}
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
            <LoginButton />
            {/* <Box sx={{ display: { sm: 'none', lg: 'flex' } }}>
              <LoginButton text={false} />
            </Box> */}
            {/* <Box sx={{ display: { sm: 'flex', lg: 'none' } }}>
              <LoginButton text={true} />
            </Box> */}
          </Flex>
        </Box>
      </AppBar>
      {/* <DrawerMenu
        menuOpen={menuOpen}
        menuToggle={menuToggle}
        page={page}
        setPage={setPage}
        navigate={navigate}
      /> */}
      <DrawerCatalog
        catalogOpen={catalogOpen}
        catalogToggle={catalogToggle}
        setPage={setPage}
        navigate={navigate}
      />
    </>
  );
};

export default TopBar;
