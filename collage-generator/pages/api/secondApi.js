import axios from "axios";

export default axios.create({
  baseURL: "https://hcti.io/v1/image",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//baseURL: "https://collage-generator-api.onrender.com",
