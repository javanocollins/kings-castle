<template>
    <div>
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
        <div class="about-container">
            <div class="words">
                <h1>
                    The creative team behind
                    <span id="name">King's Castle Cuisine</span>
                </h1>

                <h2>Who We Are</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur labore voluptatum, deleniti sequi, doloribus
                    dolorum nemo quod aperiam, culpa.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur labore voluptatum, deleniti sequi, doloribus
                    dolorum nemo quod aperiam, culpa.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Pariatur labore voluptatum,
                    deleniti sequi, doloribus dolorum nemo quod aperiam, culpa.
                </p>
            </div>
            <div class="all-images">
                <div class="img-row">
                    <div>
                        <img src="../assets/img/team/img-4.png" />
                        <h3>Sonya</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-1.jpg" />
                        <h3>Brandon</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-2.jpg" />
                        <h3>Charles</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div class="img-row-2">
                    <div>
                        <img src="../assets/img/team/img-3.jpeg" />
                        <h3>David</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-1.jpg" />
                        <h3>Ashley</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div>
                        <img src="../assets/img/team/img-2.jpg" />
                        <h3>Hanna</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Navbar/Nav";
export default {
    components: {
        appNav: Nav,
    },
    data() {
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
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@font-face {
    font-family: BlackCastleMF;
    src: url('../assets/fonts/BlackCastleMF.ttf');
}

* {
    background-color: #21282e;
}

.about-container {
    padding-top: 2rem;
    padding-bottom: 5rem;
    display: flex;
    margin: 0 auto;
}

#name {
    color: #f44006;
    font-family: BlackCastleMF;
    font-weight: 500;
    font-size: 3.8rem;
}

.words {
    width: 30%;
    color: #fff;
    font-family: Lato;
    margin: 0 auto;
    /* display: flex; */
    /* flex-direction: column; */

    h1 {
        font-size: 3.2rem;
    }
    h2 {
        padding-top: 2rem;
    }

    p {
        width: 75%;
        padding-top: 1rem;
    }
}

.all-images {
    overflow: hidden;
    .img-row,
    .img-row-2 {
        display: flex;
        img {
            max-width: 300px;
        }
        div {
            text-align: center;
            color: #fff;
            font-family: Lato;
            h3 {
                font-size: 1.5rem;
                padding-top: 0.5rem;
            }
            p {
                font-weight: 100;
                font-size: 0.9rem;
            }
        }
    }
    .img-row-2 {
        padding-top: 4rem;
    }
}

@media screen and (max-width: 500px) {
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

    .about-container {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin: auto;
    }

    .words {
        width: 80%;

        p {
            line-height: 1.4rem;
            width: 100%;
        }
    }

    .all-images {
        padding: 2rem 0 0;
        .img-row,
        .img-row-2 {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            div {
                margin: 1.5rem;
            }
        }

        .img-row-2 {
            padding-top: 0;
        }
    }
}
</style>