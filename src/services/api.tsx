import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/matheuscampanhaf/api-challenge/",
});

export default api;
