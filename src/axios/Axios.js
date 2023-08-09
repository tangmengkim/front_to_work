import axios from "axios";
import { useAuthStore } from "../pinia/AuthStore";
import { useRouter } from "vue-router";


const Axios = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    const router = useRouter();
    const { setAuthUser } = useAuthStore();
    
    localStorage.clear("user");
    setAuthUser(null);
    router.push("/login");
    return Promise.reject(error);
});

export default Axios;