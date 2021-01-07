import { combineReducers } from 'redux';

// Reducer
import { authReducer } from './auth.reducers';
import { sidebarState } from './sidebar.reducers';
import { alertReducer } from './alert.reducers';
import { distribusiReducer } from './distribusi.reducers';
import { sampelReducer } from './sampel.reducers';
import { invoiceReducer } from './invoice.reducers';
// Constants
import { authConstants } from '../constants';

const appReducer = combineReducers({
  authReducer,
  sidebarState,
  alertReducer,
  distribusiReducer,
  sampelReducer,
  invoiceReducer,
});

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const {
      authReducer,
      sidebarState,
      alertReducer,
      distribusiReducer,
      sampelReducer,
      invoiceReducer,
    } = state;

    state = {
      authReducer,
      sidebarState,
      alertReducer,
      distribusiReducer,
      sampelReducer,
      invoiceReducer,
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
