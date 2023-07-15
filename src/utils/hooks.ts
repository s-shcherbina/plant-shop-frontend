import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return isLogged;
};

export const useAdmin = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role === 'ADMIN' ? true : false;
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

export const useUnLoginUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.userData?.role.slice(-5) === ' USER' ||
    user?.userData?.role.slice(-5) === 'ADMIN'
    ? true
    : false;
};
