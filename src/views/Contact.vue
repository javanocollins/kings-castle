<template>
    <div id="contact-vue">
        <app-nav></app-nav>
        <div class="nav-menu" v-on:click="showMobileMenu">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <mobile-navbar
                v-if="showMenu"
                v-bind:style="{ backgroundColor: navColor }"
            ></mobile-navbar>
        <div id="contact-component">
            <app-contact-card></app-contact-card>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Navbar/Nav";
import ContactCard from "../components/ContactCard";
export default {
    components: {
        appNav: Nav,
        appContactCard: ContactCard,
    },data() {
        return { showMenu: false };
    },
    methods: {
        showMobileMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style lang="scss" scoped>
#contact-vue {
    background-color: #21282e;
}

@media screen and (max-width: 500px) {
    #contact-component {
        margin: auto;
    }
    
    .nav-menu {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-top: 40px;
        padding-right: 30px;
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
}
</style>