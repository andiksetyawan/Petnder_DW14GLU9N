import {
  GET_PET,
  ADD_PET,
  EDIT_PET,
  SET_PET,
  REMOVE_PET
} from "../config/constants";

const initState = {
  data: [],
  loading: false,
  currentPet: {},
  error: null
};

const pet = (state = initState, action) => {
  switch (action.type) {
    case `${GET_PET}_PENDING`:
    case `${ADD_PET}_PENDING`:
    case `${EDIT_PET}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_PET}_FULFILLED`:
    case `${ADD_PET}_FULFILLED`:
    case `${EDIT_PET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_PET}_REJECTED`:
    case `${ADD_PET}_REJECTED`:
    case `${EDIT_PET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message || "Something error"
      };
    case `${SET_PET}`:
      console.log("masuk reducer SET_CURRENT_PET");
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${REMOVE_PET}`:
      console.log("masuk reducer REMOVE_PET");
      return {
        ...state,
        data: {},
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default pet;
