import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid, Stack, useTheme } from '@mui/material';
import TopBar from './nav-bar/top-bar';
import SearchBar from './nav-bar/search-bar';
import Catalog from './nav-bar/catalog';
import SliderVertical from './sliders/slider-vertical';
import SideBar from './side-bar';
import SliderHorizontal from './sliders/slider-horizontal';
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
          // lg={2.2}
          // xl={1.8}
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
          // lg={7.6}
          lg={9.8}
          // xl={8.4}
          // lg={10}
          // xl={10.2}
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
          // md={2.8}
          lg={2.2}
          // xl={3.6}
          // xl={1.8}
          sx={{
            height: '83vh',
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
            {/* <SliderVertical /> */}
            <SimpleSlider direction='vertical' num={5} />
          </Stack>
        </Grid>

        {/* <Grid
          item
          // md={2.8}
          // lg={2.2}
          xl={1.8}
          sx={{
            height: '83vh',
            width: '100%',
            display: {
              xs: 'none',
              xl: 'flex',
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
        </Grid> */}
      </Grid>
      <Box sx={{ py: 1, m: 1, bgcolor: theme.palette.action.hover }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <SimpleSlider direction='horizontal' num={2} />
          {/* <SliderHorizontal num={2} /> */}
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
          {/* <SliderHorizontal num={3} /> */}
          <SimpleSlider direction='horizontal' num={3} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'none' } }}>
          {/* <SliderHorizontal num={5} /> */}
          <SimpleSlider direction='horizontal' num={5} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
