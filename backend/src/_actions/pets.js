import { API, setAuthToken } from "../config/api";
import { GET_PETS, ADD_PETS, EDIT_PETS } from "../config/constants";

export const getPets = user_id => {
  console.log("masuk get PETS actions");
  return {
    type: GET_PETS,
    payload: async () => {
      const res = await API.get("/pets/user/" + user_id);
      console.log("ressss data pet by user", res.data.data);
      return res.data.data;
    }
  };
};

export const addPets = data => { //change current pet with other pet
  console.log("masuk add pets actions");
  return {
    type: GET_PETS,
    payload: data
  };
};
