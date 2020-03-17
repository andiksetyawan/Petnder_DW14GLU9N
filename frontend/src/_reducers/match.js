import { GET_MATCH } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

const match = (state = initState, action) => {
  switch (action.type) {
    case `${GET_MATCH}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_MATCH}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_MATCH}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: "something error"
      };
    default:
      return state;
  }
};

export default match;
