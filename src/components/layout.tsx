import { Outlet, useLocation } from 'react-router-dom';
// import TopBar from './nav-bar/top-bar';
// import SearchBar from './nav-bar/search-bar';
// import Catalog from './nav-bar/catalog';
import { Grid, Stack, useTheme } from '@mui/material';
import TopBar from './nav-bar/top-bar';
import SearchBar from './nav-bar/search-bar';
import Catalog from './nav-bar/catalog';
import SliderVertical from './sliders/slider-vertical';
import SideBar from './side-bar';
// import SideBar from './side-bar';
// import SliderVertical from './sliders/slider-vertical';

const Layout = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  return pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/admin' ? (
    <Outlet />
  ) : (
    <>
      <TopBar />
      <SearchBar />
      <Catalog />
      {/* <Grid container sx={{ height: '83vh' }}> */}
      <Grid container>
        <Grid
          item
          md={2.8}
          lg={2.2}
          xl={1.8}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
              // borderRight: `1px solid ${theme.palette.divider}`,
            },
            justifyContent: 'center',
            p: 1,
          }}
        >
          <SideBar />
        </Grid>
        {/* <Grid
          item
          // sx={{ p: 1.5 }}
          xs={12}
          md={9.2}
          lg={9.8}
          xl={10.2}
          // lg={10}
          // xl={10.2}
          sx={{ p: 1.5, border: `1px solid ${theme.palette.divider}` }}
        >
          <Outlet />
        </Grid> */}
        <Grid
          item
          // sx={{ p: 1.5 }}
          xs={12}
          md={9.2}
          lg={7.6}
          xl={8.4}
          // lg={10}
          // xl={10.2}
          sx={{ p: 1, border: `1px solid ${theme.palette.divider}` }}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          md={2.8}
          lg={2.2}
          xl={1.8}
          sx={{
            height: '83vh',
            width: '100%',
            display: {
              xs: 'none',
              lg: 'flex',
              // borderLeft: `1px solid ${theme.palette.divider}`,
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
            <SliderVertical />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
