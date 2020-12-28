import { sampelConstants } from '../constants';

export const sampelReducer = (state = {}, action) => {
  switch (action.type) {
    case sampelConstants.GET_REQUEST:
      return {
        isFetching: true,
        ...action.payload,
      };
    case sampelConstants.GET_SUCCESS:
      return {
        isFetching: false,
        ...action.payload,
      };
    case sampelConstants.GET_FAILURE:
      return {};
    case sampelConstants.POST_REQUEST:
      return {
        isFetching: true,
      };
    case sampelConstants.POST_SUCCESS:
      return {
        isFetching: false,
      };
    case sampelConstants.POST_FAILURE:
      return {};
    default:
      return state;
  }
};
