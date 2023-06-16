import { FC, createContext, useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/admin';
import { AdminRoute, AuthRoute } from './utils/private-routes';
import Layout from './components/layout';
import uuid from 'react-uuid';
import { pages } from './common/moks';
import AuthRoot from './pages/auth';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import axios from 'axios';
// import { API_URL } from './utils/axios';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// export const checkAuth = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/auth/refresh`, {
//       withCredentials: true,
//     });
//     console.log(response.data.userData.role);
//     localStorage.setItem('token', response.data.accessToken);
//   } catch (e: any) {
//     console.log(e.response.data?.message);
//   }
// };

const App: FC = (): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  // useEffect(() => {
  //   if (localStorage.getItem('token')) checkAuth();
  // }, []);

  // console.log(localStorage.getItem('token'));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route element={<AuthRoute />}>
              <Route path='admin' element={<Admin />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path='admin' element={<Admin />} />
            </Route>
            {pages.map((page) => (
              <Route key={uuid()} path={page.path} element={page.element} />
            ))}
          </Route>
          <Route path='login' element={<AuthRoot />} />
          <Route path='register' element={<AuthRoot />} />
          {/* <Route path='order_data' element={<AuthRoot />} /> */}
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
