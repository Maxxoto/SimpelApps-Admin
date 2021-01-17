import axios from 'axios';

import { authConstants, urlConstants } from '../constants';
import { success, error } from './alert.actions';

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    const res = await axios.post(`${urlConstants.BASE_URL}/auth/login`, data);

    if (res) {
      localStorage.setItem('token', res.data.data.token);
      console.log(res.data.data);
      dispatch({ type: authConstants.LOGIN_SUCCESS, payload: res.data });
      dispatch(success(res.data.meta.message));
    }
  } catch (e) {
    dispatch({ type: authConstants.LOGIN_FAILURE, payload: e });
    dispatch(error(`Email atau password salah !`));
    // dispatch(alertActions.error(error));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: authConstants.LOGOUT });
};
