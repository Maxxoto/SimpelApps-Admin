import { sidebarConstants } from '../constants';

const initialState = {
  sidebarShow: 'responsive',
};

export const sidebarState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case sidebarConstants.SIDEBAR_STATUS:
      return { ...state, ...rest };
    default:
      return state;
  }
};
