<template>
    <nav class="navbar">
        <router-link to="/" tag="a">
            <img id="logo" src="../../assets/img/logo.png" alt />
        </router-link>

        <div class="nav-items">
            <router-link to="/" tag="li">
                <a>Home</a>
            </router-link>

            <router-link to="/meals" tag="li">
                <a>Meals</a>
            </router-link>

            <router-link id="about-link" to="/about" tag="li">
                <a>About</a>
            </router-link>

            <router-link id="contact-link" to="/contact" tag="li">
                <a>Contact</a>
            </router-link>

            <router-link to="/cart" tag="a">
                <i class="fas fa-cart-plus">
                    <span class="circle">{{ cartItems }}</span>
                </i>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
    },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

.navbar {
    display: flex;
    justify-content: space-around;
    top: 0;
    padding: 0.8em;
    z-index: 1;
    background-color: #21282e;
}

#logo {
    width: 54px;
    padding-top: 0.5rem;
}

.nav-items {
    display: flex;
    align-items: center;
    list-style: none;
}

.nav-items {
    li {
        padding: 0 0.8rem;
        flex: 1;

        a {
            color: #fff;
            font-size: 1.2rem;
            text-decoration: none;
            text-transform: uppercase;
            border-bottom: 3px transparent solid;
            padding-bottom: 0.5rem;
            font-family: "Dosis", sans-serif;
            transition: all 0.2s;
            
            &:hover {
                border-color: #f44006;
                transition: all 0.2s;
            }
        }
    }

    .fa-cart-plus {
        color: #fff;
        font-size: 1.2rem;
    }

    .circle {
        top: -8px;
        left: -6px;
        position: relative;
        z-index: 1;
        color: #f44006;
        font-family: Lato;
        font-size: 1.5rem;
    }
}

#nav-logo {
    flex-grow: 0;
}

.navbar::before,
.navbar::after {
    content: none;
}

@media screen and (max-width: 500px) {
    .navbar {
        margin: auto;
        justify-content: space-around;
        display: none;
    }
}
</style>