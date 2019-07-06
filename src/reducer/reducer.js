import * as types from "../actions/types";

const initialState = {
  upcoming: [1232131],
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_UPCOMING}`:
      return {
        ...state,
        upcoming: payload.data.results
      };
    default:
      return state;
  }
}

