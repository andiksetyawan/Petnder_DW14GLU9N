import { API } from "../config/api";
import { GET_SPECIES } from "../config/constants";

export const getSpecies = () => {
  console.log("masuk get specie actions")
  return {
    type: GET_SPECIES,
    payload: async () => {
      const res = await API.get("/species");
      console.log("ressss SPECIES", res.data.data);
      return res.data.data;
    }
  };
};
