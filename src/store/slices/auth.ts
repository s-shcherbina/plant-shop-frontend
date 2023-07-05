import { createSlice } from '@reduxjs/toolkit';
import { IAuthState, IUser } from '../../types';

const initialState: IAuthState = {
  user: {} as IUser,
  isLogged: false,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
      state.isAdmin = state.user.userData.role === 'ADMIN' ? true : false;

      // console.log('user', state.user);
      // console.log('isLogged', state.isLogged);
      // console.log('isAdmin', state.isAdmin);
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
