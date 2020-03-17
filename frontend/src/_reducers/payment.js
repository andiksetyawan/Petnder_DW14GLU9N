import { GET_PAYMENT, ADD_PAYMENT, RESET_PAYMENT } from "../config/constants";

const initState = {
  data: {
    status: "free"
  },
  loading: false,
  error: null
};

const payment = (state = initState, action) => {
  switch (action.type) {
    case `${GET_PAYMENT}_PENDING`:
    case `${ADD_PAYMENT}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_PAYMENT}_FULFILLED`:
    case `${ADD_PAYMENT}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_PAYMENT}_REJECTED`:
    case `${ADD_PAYMENT}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: "Something error"
      };
    case `${RESET_PAYMENT}`:
      return {
        ...state,
        data: initState.data,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default payment;
