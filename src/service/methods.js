// Services
import { getRequest, postRequest } from "./api";

// Exports
export const request = ({
  url,
  data,
  method = "default"
}) => {

  // Go to api
  switch (method.toUpperCase()) {
    case "POST":
      return postRequest(url, data);

    case "GET":
      return getRequest(url);

    default:
      return Promise.reject(`Method not implemented yet: ${method}`);
  }
};
