<template>
    <nav class="navbar">
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
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
    @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&display=swap");

    .navbar {
        display: flex;
        justify-content: flex-end;
        margin-right: 50px;
        width: 100%;
        top: 0;
        padding: 0.8em;
        z-index: 1;
        background-color: #21282e;
    }

    .nav-items {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        list-style: none;
    }

    .nav-items {
        li {
            padding: 0.8rem 0;
            flex: 1;

            a {
                color: #fff;
                font-size: 1.2rem;
                text-decoration: none;
                text-transform: uppercase;
                border-bottom: 3px transparent solid;
                padding-bottom: 0.5rem;
                font-family: "Dosis", sans-serif;
                /* transition: all 0.2s; */
            }

            &:hover {
                border-color: #f44006;
                transition: all 0.2s;
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

    .nav-menu {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-top: 40px;
        margin-right: 50px;
        ul {
            border: solid #fff 1px;
            border-radius: 5px;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            cursor: pointer;
            li {
                background: #fff;
                width: 25px;
                margin: 0.15rem 0;
                height: 3px;
            }
        }
    }

    .navbar::before,
    .navbar::after {
        content: none;
    }
}
</style>