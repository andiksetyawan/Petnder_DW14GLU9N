import { GET_PETS, ADD_PETS, EDIT_PETS } from "../config/constants";

const initState = {
  data: [],
  loading: false,
  error: null
};

const pets = (state = initState, action) => {
  switch (action.type) {
    case `${GET_PETS}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_PETS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_PETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };

    case `${ADD_PETS}`:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default pets;
