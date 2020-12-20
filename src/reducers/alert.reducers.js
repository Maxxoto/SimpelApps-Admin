import { alertConstants } from '../constants';

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.LOADING:
      return {
        type: 'info',
        message: action.message,
      };
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'danger',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
};
