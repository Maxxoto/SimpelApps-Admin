import { combineReducers } from 'redux';

// Reducer
import { authReducer } from './auth.reducers';
import { sidebarState } from './sidebar.reducers';
// Constants
import { authConstants } from '../constants';

const appReducer = combineReducers({ authReducer, sidebarState });

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const { authReducer, sidebarState } = state;

    state = { authReducer, sidebarState };
  }

  return appReducer(state, action);
};

export default rootReducer;
