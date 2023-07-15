import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid, Stack, useTheme } from '@mui/material';
import TopBar from './nav-bar/top-bar';
import SearchBar from './nav-bar/search-bar';
import Catalog from './nav-bar/catalog';
import SideBar from './side-bar';
import SimpleSlider from './sliders/simple-slider';

const Layout = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/admin' ? (
    <Outlet />
  ) : pathname === '/group' || pathname === '/subgroup' ? (
    <>
      <TopBar />
      <SearchBar />
      <Catalog />
      <Outlet />
    </>
  ) : (
    <>
      <TopBar />
      <SearchBar />
      <Catalog />

      <Grid container>
        <Grid
          item
          md={2.8}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
              lg: 'none',
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
            justifyContent: 'center',
            p: 1,
          }}
        >
          <SideBar />
        </Grid>
        <Grid
          item
          xs={12}
          md={9.2}
          lg={9.8}
          sx={{
            p: 1,
            border: `1px solid ${theme.palette.divider}`,
            px: { xl: '1.5%' },
          }}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          lg={2.2}
          sx={{
            height: '83vh',
            display: {
              xs: 'none',
              lg: 'flex',
            },
            justifyContent: 'center',
            p: 1,
          }}
        >
          <Stack
            sx={{
              bgcolor: theme.palette.action.hover,
              borderRadius: 2,
              width: '100%',
              p: 1,
            }}
          >
            <SimpleSlider direction='vertical' num={5} />
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ py: 1, m: 1, bgcolor: theme.palette.action.hover }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <SimpleSlider direction='horizontal' num={2} />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
          <SimpleSlider direction='horizontal' num={3} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' } }}>
          <SimpleSlider direction='horizontal' num={5} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
