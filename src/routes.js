import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Meals from "./views/Meals.vue";
import Contact from "./views/Contact.vue";
import Reservation from "./views/Reservation.vue";
import Cart from './views/Cart.vue'

const siteName = "King's Castle";

export const routes = [
    {
        path: "",
        component: Home,
        meta: {
            title: `${siteName} | Home`,
        },
    },
    {
        path: "/about",
        component: About,
        meta: {
            title: `${siteName} | About`,
        },
    },
    {
        path: "/meals",
        component: Meals,
        meta: {
            title: `${siteName} | Meals`,
        },
    },
    {
        path: "/contact",
        component: Contact,
        meta: {
            title: `${siteName} | Contact`,
        },
    },
    {
        path: "/register",
        component: Reservation,
        meta: {
            title: `${siteName} | Reservations`,
        },
    },
    {
        path:'/cart',
        component: Cart,
        meta: {
            title: `${siteName} | Cart`
        }
    }
];