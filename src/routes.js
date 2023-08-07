import Login from "./components/Login.vue";
import HomePage from "./components/HomePage.vue";
import Dashboard from "./components/Dashboard.vue";
import AdminPage from "./components/AdminPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routers = [
    {
        component: Login ,
        path: "/login",
        name: "login"
    },
    {
        component: HomePage ,
        path: "/",
        name: "HomePage"
    },
    {   
    component: AdminPage ,
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

export default router;