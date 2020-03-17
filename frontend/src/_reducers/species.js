import { GET_SPECIES } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

 const species = (state = initState, action) => {
  switch (action.type) {
    case `${GET_SPECIES}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_SPECIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_SPECIES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: "something error"
      };
    default:
      return state;
  }
};


export default species;