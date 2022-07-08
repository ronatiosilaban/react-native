import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.kontenbase.com/query/api/v1/d3fd9977-9251-49a8-9c9d-fc4180c551cd"
});

export default API