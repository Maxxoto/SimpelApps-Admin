import { combineReducers } from 'redux';

import { authReducer } from './auth.reducers';
// Reducer

// Constants
import { authConstants } from '../constants';

const appReducer = combineReducers({ authReducer });

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const { authReducer } = state;

    state = { authReducer };
  }

  return appReducer(state, action);
};

export default rootReducer;
