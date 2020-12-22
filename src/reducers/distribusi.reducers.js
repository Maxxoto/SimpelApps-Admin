import { distribusiConstants } from '../constants';

export const distribusiReducer = (state = {}, action) => {
  switch (action.type) {
    case distribusiConstants.GET_REQUEST:
      return {
        isFetching: true,
        ...action.payload,
      };
    case distribusiConstants.GET_SUCCESS:
      return {
        isFetching: false,
        ...action.payload,
      };
    case distribusiConstants.GET_FAILURE:
      return {};
    default:
      return state;
  }
};
