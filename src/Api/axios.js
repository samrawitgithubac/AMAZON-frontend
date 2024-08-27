import axios from "axios";
const axiosInstance = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-7bfc6/us-central1/api",
  //local host
 // baseURL: "http://127.0.0.1:5001/clone-7bfc6/us-central1/api",
  //baseURL: "http://localhost:5000/",
  //deployed
  baseURL: "https://amazon-api-deployment-2.onrender.com/",
});
export { axiosInstance };
