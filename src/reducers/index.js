import { combineReducers } from 'redux';

// Import reducer
// import {authReducer} from './auth.reducers';

// Import constant
// import {authConstants} from '../constants';

const appReducer = combineReducers({
  //   authReducer,
});
const rootReducer = (state, action) => {
  //   if (action.type === authConstants.LOGOUT) {
  //     const {
  // List state reducer yang akan direset ketika logout
  //   authReducer,
  // } = state;

  // state = {
  // Destructuring state
  //   authReducer,
  // };
  //   }

  return appReducer(state, action);
};

export default rootReducer;
