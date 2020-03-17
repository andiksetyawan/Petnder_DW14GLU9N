import { API, setAuthToken } from "../config/api";
import { GET_PETS_MATCH } from "../config/constants";

export const getPetsMatch = (id) => {
  console.log("masuk GET_PETS_MATCH actions");
  const token = localStorage.getItem("token");
  return {
    type: GET_PETS_MATCH,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/pet/generate_matching/"+id);
      console.log("ressss SPECIES", res.data.data);
      return res.data.data;
    }
  };
};
