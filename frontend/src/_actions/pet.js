import { API, setAuthToken } from "../config/api";
import {
  GET_PET,
  ADD_PET,
  EDIT_PET,
  SET_PET,
  REMOVE_PET
} from "../config/constants";

export const getPet = id => {
  console.log("masuk get PET actions");
  return {
    type: GET_PET,
    payload: async () => {
      const res = await API.get("/pet/" + id);
      console.log("ressss data pet by user", res.data.data);
      return res.data.data;
    }
  };
};

export const addPet = data => {
  console.log("masuk ADD PET actions");
  const token = localStorage.getItem("token");
  return {
    type: ADD_PET,
    payload: async () => {
      setAuthToken(token);
      const res = await API.post("/pet", data);
      //console.log("ressss data pet by user", res.data.data);
      return res.data.data;
    }
  };
};

export const editPet = (id_pet, data) => {
  console.log("masuk edit PET actions", id_pet, data);
  const token = localStorage.getItem("token");
  return {
    type: EDIT_PET,
    payload: async () => {
      setAuthToken(token);
      const res = await API.put("/pet/" + id_pet, data);
      console.log("ressss data pet by user", res.data.data);
      return res.data.data;
    }
  };
};

export const setPet = data => {
  console.log("masuk setCurrentPet actions", data);
  return {
    type: SET_PET,
    payload: data
  };
};

export const removePet = () => {
  console.log("masuk removePet actions");
  return {
    type: REMOVE_PET,
    payload: {}
  };
};
