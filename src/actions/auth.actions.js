// import axios from 'axios';

// import { authConstants, urlConstants } from '../constants';
// import { success, error } from './alert.actions';

// export const login = (data) => async (dispatch) => {
//   try {
//     console.log('Request...');
//     dispatch({ type: authConstants.LOGIN_REQUEST });

//     const res = await axios.post(
//       `${urlConstants.BASE_URL}/auth/local/superadmin`,
//       data,
//     );

//     if (res) {
//       console.log('Completed...');
//       localStorage.setItem('token', res.data.data.token);
//       dispatch({ type: authConstants.LOGIN_SUCCESS, payload: res.data });
//       dispatch(success(res.data.meta.message));
//     }
//   } catch (e) {
//     console.log('Error...');
//     dispatch({ type: authConstants.LOGIN_FAILURE, payload: error });
//     dispatch(error('Email atau password salah !'));
//   }
// };

// export const logout = () => (dispatch) => {
//   localStorage.removeItem('token');
//   dispatch({ type: authConstants.LOGOUT });
// };
