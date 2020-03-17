import { API, setAuthToken } from "../config/api";
import { GET_PAYMENT, ADD_PAYMENT, RESET_PAYMENT } from "../config/constants";

export const getPayment = () => {
  console.log("masuk GET_PAYMENT actions");
  const token = localStorage.getItem("token");

  return {
    type: GET_PAYMENT,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/payment");
      console.log("ressss GET_PAYMENT", res.data.data);
      return res.data.data;
    }
  };
};

export const addPayment = data => {
  console.log("masuk ADD_PAYMENT actions");
  const token = localStorage.getItem("token");

  return {
    type: ADD_PAYMENT,
    payload: async () => {
      setAuthToken(token);
      const res = await API.post("/payment", data);
      console.log("ressss ADD_PAYMENT", res.data.data);
      return res.data.data;
    }
  };
};

export const resetPayment = () => {
  console.log("masuk resetPayment actions");
  return {
    type: RESET_PAYMENT,
    payload: {}
  };
};
