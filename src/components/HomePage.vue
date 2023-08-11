<template>
    <div>
        <p>{{ JSON.stringify(user) }}</p>
        <button @click="Logout" class="bg-red-600 rounded-md">Logout</button>
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