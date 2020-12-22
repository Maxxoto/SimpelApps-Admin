import { combineReducers } from 'redux';

// Reducer
import { authReducer } from './auth.reducers';
import { sidebarState } from './sidebar.reducers';
import { alertReducer } from './alert.reducers';
import { distribusiReducer } from './distribusi.reducers';
// Constants
import { authConstants } from '../constants';

const appReducer = combineReducers({
  authReducer,
  sidebarState,
  alertReducer,
  distribusiReducer,
});

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const {
      authReducer,
      sidebarState,
      alertReducer,
      distribusiReducer,
    } = state;

    state = { authReducer, sidebarState, alertReducer, distribusiReducer };
  }

  return appReducer(state, action);
};

export default rootReducer;
