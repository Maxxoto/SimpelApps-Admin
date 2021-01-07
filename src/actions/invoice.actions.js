import axios from 'axios';

import { invoiceConstants, urlConstants, config } from '../constants';
import { success, error } from './alert.actions';

export const getInvoice = () => async (dispatch) => {
  try {
    dispatch({ type: invoiceConstants.GET_REQUEST });

    const res = await axios.get(`${urlConstants.BASE_URL}/invoices`, config());

    if (res) {
      dispatch({ type: invoiceConstants.GET_SUCCESS, payload: res.data });
      dispatch(success(res.data.meta.message));
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: invoiceConstants.GET_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const deleteInvoice = (id) => async (dispatch) => {
  try {
    dispatch({ type: invoiceConstants.DELETE_REQUEST });

    const res = await axios.delete(
      `${urlConstants.BASE_URL}/invoices/${id}`,
      config(),
    );

    if (res) {
      dispatch({ type: invoiceConstants.DELETE_SUCCESS });
      dispatch(success(res.data.meta.message));
      dispatch(getInvoice());
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: invoiceConstants.DELETE_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};
