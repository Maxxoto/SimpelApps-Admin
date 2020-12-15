// import { authConstants } from '../constants';

// let token = localStorage.getItem('token');

// const initialState = token
//   ? { isAuthenticated: true, token }
//   : { isAuthenticated: false };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case authConstants.LOGIN_REQUEST:
//       return {
//         isFetching: true,
//         isAuthenticated: false,
//         user: action.payload,
//       };
//     case authConstants.LOGIN_SUCCESS:
//       return {
//         isFetching: false,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     case authConstants.LOGIN_FAILURE:
//       return {};
//     case authConstants.LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
