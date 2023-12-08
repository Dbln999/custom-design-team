import axios from "axios";

export const $api = axios.create({
  baseURL: "",
  headers: {
    authorization: localStorage.getItem("USER_LOCALSTORAGE_KEY") || "",
  },
});
