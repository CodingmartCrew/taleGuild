import axios from "axios";

export const httpRequest = async ({
  baseURL,
  endpoint,
  method,
  body = {},
  query = "",
  contentType = "",
}) => {
  try {
    const response = await axios.request({
      method: method,
      baseURL: baseURL,
      url: `${endpoint}${query ? "?" + query : ""}`,
      data: body, 
    }); 
    return response;
  } catch (error) { 
    if (!error.response) {
      throw {
        success: false,
        message: error.message || "Internal Server Error, Please try again",
        status: error.status || 500,
      };
    } 
  }
};
