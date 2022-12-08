import axios from "axios";

export default axios.create({
  baseURL: "https://collage-generator-api.up.railway.app/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//baseURL: "https://collage-generator-api.onrender.com",
