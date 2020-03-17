import {
  LOGIN,
  REGISTER,
  LOGOUT,
  GET_AUTH,
  AUTO_AUTH
} from "../config/constants";

const initState = {
  authenticated: false,
  user: null,
  loading: true,
  error: null
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case `${GET_AUTH}_PENDING`: //AUTOAUTH
    case `${LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_AUTH}_FULFILLED`:
    case `${LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
      //console.log("GET AUT FULL", action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case `${GET_AUTH}_REJECTED`:
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      //console.log("payload", action.payload);
      return {
        ...state,
        loading: false,
        error:
          action.payload.response.data.message ||
          "something error, please relogin"
      };
    case `${LOGOUT}`:
      console.log("logout");
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
        error: null
      };
    // case `${AUTO_AUTH}`:
    //   console.log("GET AUT AUTOAUTH", action.payload);
    //   return {
    //     ...state,
    //     authenticated: true,
    //     user: action.payload,
    //     loading: false,
    //     error: null
    //   };

    default:
      return state;
  }
};

export default auth;
