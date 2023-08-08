import axios from "axios";
import { useAuthStore } from "../pinia/AuthStore";

const { setAuthUser } = useAuthStore();
const Axios = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    localStorage.clear("user");
    setAuthUser(null);
    return Promise.reject(error);
});

export default Axios;