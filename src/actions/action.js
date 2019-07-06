import api from "./api";
import * as types from "./types";

export function getUpcoming() {
  return async dispatch => {
    dispatch({
      type: types.GET_UPCOMING,
      payload: await api.getApi("/movie/upcoming?")
    });
  };
}