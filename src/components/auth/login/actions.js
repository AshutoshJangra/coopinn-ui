import axios from "axios";
import authService from "../../../services/auth-service";

export const register = (userData) => {
  return axios
    .post("/api/v1/shops/signup", { ...userData })
    .then((res) => res.data, (err) => Promise.reject(err.response.data.errors));
};

export const checkAuthState = (e) => {
  console.log("in a");
  if (authService.isAuthenticated()) {
    return true;
  }
};

export const login = (userData) => {
  return axios
    .post("/api/v1/shops/login", { ...userData })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const logout = () => {
  authService.invalidateUser();
};
