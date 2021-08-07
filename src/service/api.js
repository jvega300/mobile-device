// Modules
import axios from "axios";


export const getHeaders = (contentType = "application/json") => {
  const headers = {
    "Content-Type": contentType
  };
  
  return { headers };
};

export const postRequest = (url, data) =>
  axios.post(url, data, getHeaders);

export const getRequest = (url) =>
  axios.get(url, getHeaders);
