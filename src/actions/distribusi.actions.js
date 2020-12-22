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
    dispatch({ type: distribusiConstants.GET_FAILURE, payload: e });
    dispatch(error(`Terjadi kesalahan ! \n ${e.response.data.meta.message}`));
  }
};
