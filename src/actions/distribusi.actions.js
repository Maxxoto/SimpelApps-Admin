import axios from 'axios';

import { distribusiConstants, urlConstants, config } from '../constants';
import { success, error } from './alert.actions';

export const getDistribusi = () => async (dispatch) => {
  try {
    dispatch({ type: distribusiConstants.GET_REQUEST });

    const res = await axios.get(
      `${urlConstants.BASE_URL}/examinations`,
      config(),
    );

    if (res) {
      dispatch({ type: distribusiConstants.GET_SUCCESS, payload: res.data });
      dispatch(success(res.data.meta.message));
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: distribusiConstants.GET_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const deleteDistribusi = (id) => async (dispatch) => {
  try {
    dispatch({ type: distribusiConstants.DELETE_REQUEST });

    const res = await axios.delete(
      `${urlConstants.BASE_URL}/examinations/${id}`,
      config(),
    );

    if (res) {
      dispatch({ type: distribusiConstants.DELETE_SUCCESS });
      dispatch(success(res.data.meta.message));
      dispatch(getDistribusi());
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: distribusiConstants.DELETE_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const updateDistribusi = (id, data, history) => async (dispatch) => {
  try {
    dispatch({ type: distribusiConstants.PUT_REQUEST });
    const res = await axios.put(
      `${urlConstants.BASE_URL}/examinations/${id}`,
      data,
      config(),
    );

    if (res) {
      dispatch({ type: distribusiConstants.PUT_SUCCESS });
      dispatch(success(res.data.meta.message));
      history.push('/distribusi');
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: distribusiConstants.PUT_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};
