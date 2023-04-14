import { createSlice } from '@reduxjs/toolkit';
const initialState = { token: null };
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload: { token } }) => {
      if (typeof token !== 'undefined') {
        state.token = token;
      }
    },
    removeToken: state => {
      state.token = null;
    },
  },
});
export const { setToken, removeToken } = slice.actions;
export default slice.reducer;
