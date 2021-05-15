import Vue from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar/Nav.vue";
import MobileNavbar from "./components/Navbar/MobileNav.vue";
import Button from "./components/Button/Btn.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";

Vue.component("Navbar", Navbar);
Vue.component("Btn", Button);
Vue.component("MobileNavbar", MobileNavbar);

import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");
