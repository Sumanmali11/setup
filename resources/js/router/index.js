import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        // App Layout
        path: "/",
        component: () => import("../layouts/App"),
        children: [
            {
                path: "/",
                name: 'Home',
                component: () => import("../components/ExampleComponent"),
            },
        ],
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active",
    render: (h) => h(App),
});

export default router;
