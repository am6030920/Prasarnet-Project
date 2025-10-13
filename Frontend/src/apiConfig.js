import axios from "axios";

import { API_URL } from "./apiList";
const api=axios.create({
    baseURL:API_URL,
});
api.interceptors.request.use(
    (config)=>{
        return config;
    },
    (error)=>Promise.reject(error)
);
export default api;