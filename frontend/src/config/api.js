import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  // baseURL: "https://api_landtick.andiksetyawan.dev/api/v1"
  baseURL: `${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1`
});

export const setAuthToken = token => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
