import { invoiceConstants } from '../constants';

export const invoiceReducer = (state = {}, action) => {
  switch (action.type) {
    case invoiceConstants.GET_REQUEST:
      return {
        isFetching: true,
        ...action.payload,
      };
    case invoiceConstants.GET_SUCCESS:
      return {
        isFetching: false,
        ...action.payload,
      };
    case invoiceConstants.GET_FAILURE:
      return {};
    case invoiceConstants.POST_REQUEST:
      return {
        isFetching: true,
      };
    case invoiceConstants.POST_SUCCESS:
      return {
        isFetching: false,
      };
    case invoiceConstants.POST_FAILURE:
      return {};
    default:
      return state;
  }
};
