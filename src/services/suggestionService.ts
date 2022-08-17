import axios from "axios";
import { ISuggestion } from "../interfaces/index";
const http = `http://localhost:3001/posts`;

export default {
  get: () => {
    return axios.get(`${http}`);
  },
  delete: (id: number) => {
    return axios.delete(`${http}/${id}`);
  },
  put: (id: number, suggestion: object) => {
    return axios.put(`${http}/${id}`, suggestion);
  },
  post: (suggestion: ISuggestion) => {
    return axios.post(`${http}`, suggestion);
  },
};
