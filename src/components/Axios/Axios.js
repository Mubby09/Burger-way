import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-way.firebaseio.com/"
});

export default instance;
