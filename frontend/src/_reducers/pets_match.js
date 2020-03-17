import { GET_PETS_MATCH } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

//REDUCER FROM GENERATE LIST PET MATCHING

 const pets_match = (state = initState, action) => {
  switch (action.type) {
    case `${GET_PETS_MATCH}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_PETS_MATCH}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_PETS_MATCH}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: "something error"
      };
    default:
      return state;
  }
};


export default pets_match;