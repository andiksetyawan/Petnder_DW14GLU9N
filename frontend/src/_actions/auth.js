import axios from "axios";

import { API, setAuthToken } from "../config/api";

export const getAuth = () => {
  //AUTOAUTH
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: "GET_AUTH",
      payload: async () => {
        setAuthToken(token);
        const res = await API.get("/autoauth");
        console.log("ressss", res.data.data);

        return res.data.data;
      }
    };
  } else {
    ////redirect to login page
    console.log("LOGOUT XXXX");
    return {
      type: "LOGOUT",
      payload: {}
    };
  }
};


export const login = data => {
  console.log("data action login", data);
  return {
    type: "LOGIN",
    payload: async () => {
      const res = await API.post("/login", data);
      //  console.log("ressss", res.data.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);

      return res.data.data;
    }
  };
};

export const register = data => {
  console.log("data action register", data);
  return {
    type: "REGISTER",
    payload: async () => {
      const res = await API.post("/register", data);
      console.log("ressss", res.data.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);
      return res.data.data;
    }
  };
};

export const logout = () => {
  console.log("data action LOGOUT");
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("userId");
  return {
    type: "LOGOUT",
    payload: {}
  };
};


// export const autoAuth = () => {
//   //AUTOAUTH
//   const token = localStorage.getItem("token");
//   if (token) {
//     return {
//       type: "AUTO_AUTH",
//       payload: {
//         id: 1,
//         token,
//         email: "test@gmail.com"
//       }
//     };
//   } else {
//     ////redirect to login page
//     console.log("LOGOUT XXXX");
//     return {
//       type: "LOGOUT",
//       payload: {}
//     };
//   }
// };
