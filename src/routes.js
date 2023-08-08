import Login from "./components/Login.vue";
import HomePage from "./components/HomePage.vue";
import Dashboard from "./components/Dashboard.vue";
import AdminPage from "./components/AdminPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./pinia/AuthStore";


const routers = [
    {
        component: Login,
        path: "/login",
        name: "login"
    },
    {
        component: HomePage,
        path: "/",
        name: "HomePage"
    },
    {
        component: AdminPage,
        path: "/",
        children: [
            {
                component: Dashboard,
                path: "/admin/dashboard",
                name: "AdminDashboard"
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

router.beforeEach(async (to, from,next) => {
    const { user } = storeToRefs(useAuthStore());
    if(!user.value && to.path  === "/"){
        return next({ name: "login"})
    }
    if(user.value && to.path == "/login"){
        return next({name: "HomePage"})
    }
    return next();

})

export default router;