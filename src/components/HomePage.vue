<template>
    <div class="justify-center items-center m-5">
        <p class="text-center text-lg text-cyan-600 text-size-20px">Welcome to {{ user.username }}</p>
        <button @click="Logout" class="bg-red-600 rounded-md text-white px-4 py-2 ">Logout</button>
    </div>
</template>

<script setup>

import Axios from '../axios/Axios';
import { useAuthStore } from '../pinia/AuthStore';
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router';

const { user } = storeToRefs(useAuthStore());
const { setAuthUser}=useAuthStore();

const router = useRouter()
async function Logout() {
//hejjjj
    try {
        
        const response = await Axios.post('/logout');
        if (response.status == 200) {
            localStorage.clear("user"),
            setAuthUser(null),
            router.push({ name: "login"})
        }



    } catch (error) {
        alert(error.response.data.message)
    }
    
}
</script>