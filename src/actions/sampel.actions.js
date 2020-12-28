import axios from 'axios';

import { sampelConstants, urlConstants, config } from '../constants';
import { success, error } from './alert.actions';
import { useHistory } from 'react-router-dom';

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

export const postSampel = (data) => async (dispatch) => {
  try {
    // const history = useHistory();
    dispatch({ type: sampelConstants.POST_REQUEST });

    const res = await axios.post(
      `${urlConstants.BASE_URL}/samples/create`,
      data,
      config(),
    );

    if (res) {
      dispatch({ type: sampelConstants.POST_SUCCESS });
      dispatch(success(res.data.meta.message));
      // history.push('/sampel');
    }
  } catch (e) {
    const error_response = e.response
      ? e.response.data.meta.message
      : 'silahkan ulangi beberapa saat lagi atau menghubungi admin';
    dispatch({ type: sampelConstants.POST_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${error_response}`));
  }
};
