import { combineReducers } from 'redux';

// Reducer
import { authReducer } from './auth.reducers';
import { sidebarState } from './sidebar.reducers';
import { alertReducer } from './alert.reducers';
// Constants
import { authConstants } from '../constants';

const appReducer = combineReducers({ authReducer, sidebarState, alertReducer });

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const { authReducer, sidebarState, alertReducer } = state;

    state = { authReducer, sidebarState, alertReducer };
  }

  return appReducer(state, action);
};

export default rootReducer;
