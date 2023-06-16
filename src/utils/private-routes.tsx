import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth, useAuthAdmin } from './hooks';

export const AuthRoute = () => {
  // const auth = useAuth();
  const auth = true;
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export const AdminRoute = () => {
  // const admin = useAuthAdmin();
  const admin = true;
  return admin ? <Outlet /> : <Navigate to='login' />;
};
