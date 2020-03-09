import { GET_USER } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

const user = (state = initState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};

export default user;
