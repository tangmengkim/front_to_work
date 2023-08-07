import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {

    const user = ref();

    function setAuthUser (_user) {
        user.value = _user;

    }

    return {
        user,
        setAuthUser
    }
})