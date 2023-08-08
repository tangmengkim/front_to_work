import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const localStorageUser = localStorage.getItem("user");
    const user = ref(JSON.parse(localStorageUser));

    function setAuthUser(_user) {
        user.value = _user;

    }

    return {
        user,
        setAuthUser
    }
})