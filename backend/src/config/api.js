import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1"
});

export const setAuthToken = token => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
