import axios from 'axios';

import { sampelConstants, urlConstants, config } from '../constants';
import { success, error } from './alert.actions';

export const getSampel = () => async (dispatch) => {
  try {
    dispatch({ type: sampelConstants.GET_REQUEST });

    const res = await axios.get(`${urlConstants.BASE_URL}/samples`, config());

    if (res) {
      dispatch({ type: sampelConstants.GET_SUCCESS, payload: res.data });
      dispatch(success(res.data.meta.message));
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: sampelConstants.GET_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const postSampel = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: sampelConstants.POST_REQUEST });

    const res = await axios.post(
      `${urlConstants.BASE_URL}/samples/create`,
      data,
      config(),
    );

    if (res) {
      dispatch({ type: sampelConstants.POST_SUCCESS });
      dispatch(success(res.data.meta.message));
      history.push('/sampel');
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: sampelConstants.POST_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const deleteSampel = (id) => async (dispatch) => {
  try {
    dispatch({ type: sampelConstants.DELETE_REQUEST });

    const res = await axios.delete(
      `${urlConstants.BASE_URL}/samples/${id}`,
      config(),
    );

    if (res) {
      dispatch({ type: sampelConstants.DELETE_SUCCESS });
      dispatch(success(res.data.meta.message));
      dispatch(getSampel());
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: sampelConstants.DELETE_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};

export const updateSampel = (id,data, history) => async (dispatch) => {
  try {
    dispatch({ type: sampelConstants.PUT_REQUEST });
    console.log(data);
    const res = await axios.put(
      `${urlConstants.BASE_URL}/samples/${id}`,
      data,
      config(),
    );

    if (res) {
      dispatch({ type: sampelConstants.PUT_SUCCESS });
      dispatch(success(res.data.meta.message));
      history.push('/sampel');
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: sampelConstants.PUT_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};
