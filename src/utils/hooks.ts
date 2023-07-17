import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return isLogged;
};

// export const useAuth = () => {
//   return !!localStorage.getItem('token');
// };

export const useAdmin = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'ADMIN' ? true : false;
};

export const useCustomer = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'CUSTOMER CUSTOMER' ? true : false;
};

// export const useUser = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   return user?.userData?.role === 'USER' ? true : false;
// };

export const useAdminOrUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'USER' || user?.userData?.role === 'ADMIN'
    ? true
    : false;
};

export const useUnLoggedUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  // return user?.userData?.role.slice(-5) === ' USER' ||
  //   user?.userData?.role.slice(-5) === 'ADMIN'
  return user?.userData?.role === 'CUSTOMER USER' ||
    user?.userData?.role === 'CUSTOMER ADMIN'
    ? true
    : false;
};
