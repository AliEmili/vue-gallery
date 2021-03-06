import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/404",
        component: () =>
            import ("../views/PageNotFound.vue")
    },
    {
        path: "/signup",
        component: () =>
            import ("../views/Signup.vue")
    },
    {
        path: "/login",
        component: () =>
            import ("../views/Login.vue")
    },
    {
        path: "/gallery",
        component: () =>
            import ("../views/Gallery.vue")
    },
    {
        path: "/gallery/:nth",
        component: () =>
            import ("../views/Photo.vue"),
        props: true
    },
    {
        path: "/addPhoto",
        component: () =>
            import ("../views/addPhoto.vue")
    },
    {
        path: "/gallery/:nth/comments",
        component: () =>
            import ("../views/Comment.vue"),
        props: true
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;