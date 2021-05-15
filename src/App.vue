<template>
    <div id="app">
        <div class="container"></div>
        <transition name="bounce">
            <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
    name: "App",
    components: {
        appFooter: Footer,
    },
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

@import "./scss/_variables.scss";

* {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

a {
    font-family: Lato;
}

/* .container {
    max-width: 1280px;
    margin: 0 auto;
} */

.bounce-enter-active {
    transition: all 0.5s ease;
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    transition: all 0.5s ease-out cubic-bezier(1, 0.5, 0.8, 1);
}
.bounce-enter, .bounceIn-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
}
</style>
