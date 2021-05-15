<template>
    <div id="home">
        <div class="bg-img">
            <navbar v-bind:style="{ backgroundColor: navColor }"></navbar>

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

            <div class="container header">
                <div class="restaurant-heading">
                    <h3 id="welcome">Welcome To</h3>
                    <h1>King's Castle</h1>
                    <p id="cuisine">Cuisine</p>
                    <Btn label="Book A Table" route="/register" />
                </div>

                <div class="food-image-container">
                    <img
                        id="food-heading"
                        src="../assets/img/food-header.png"
                        alt=""
                        ref="image"
                        v-on:mousemove="onMouseMove"
                    />
                </div>
            </div>
        </div>
        <Founders />
        <Dessert />
        <OurCustomers />
    </div>
</template>

<script>
import Dessert from "../components/Dessert/Dessert";
import Founders from "../components/Founders/Founders";
import OurCustomers from "../components/Our-Customers/OurCustomers";

import { TweenMax} from "gsap/all";
import { Expo } from "gsap";

export default {
    components: {
        Dessert,
        Founders,
        OurCustomers,
    },
    data() {
        return {
            navColor: "transparent",
            showMenu: false,
        };
    },
    methods: {
        showMobileMenu() {
            this.showMenu = !this.showMenu;
        },
        /// GSAP
        TweenMaxFunction() {
            TweenMax.set(this.$refs.image, {
                perspective: 400,
                transformOrigin: "center center -10",
            });
        },
        onMouseMove(e) {
            const elRelativeXPos = e.pageX - this.elXPos;
            const elRelativeYPos = e.pageY - this.elYPos;
            const xPos = elRelativeXPos / this.width - 0.2;
            const yPos = elRelativeYPos / this.height - 0.2;
            const rotationXValue = -30 * yPos;
            const rotationYValue = -30 * xPos;

            TweenMax.to(this.$refs.image, 12, {
                rotationY: rotationYValue,
                rotationX: rotationXValue,
                ease: Expo.easeOut,
            });
        },
    },
    mounted() {
        /// GSAP Variables
        this.elXPos = this.$refs.image.getBoundingClientRect().left;
        this.elYPos = this.$refs.image.getBoundingClientRect().top;
        this.width = this.$refs.image.getBoundingClientRect().width;
        this.height = this.$refs.image.getBoundingClientRect().height;
    },
};
</script>

<style scoped lang="scss">
@font-face {
    font-family: BlackCastleMF;
    src: url('../assets/fonts/BlackCastleMF.ttf');
}
.bg-img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url("../assets/img/home-bg.jpg");
    min-height: 380px;
    display: flex;
    flex-direction: column;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Needed to position the navbar */
    position: relative;
}

h1 {
    text-align: center;
    display: block;
    margin: auto;
    font-family: BlackCastleMF;
    font-weight: 500;
    
    font-size: 8rem;
    color: #fff;
}

#full-logo {
    width: 400px;
    margin: 0 auto;
    display: block;
}

#cuisine {
    font-size: 2rem;
    font-family: Lato;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.5rem;
}

.header {
    text-align: center;
    margin: auto 0;
    display: flex;
    padding: 0 5rem;
    justify-content: space-evenly;
    align-items: center;
}

#welcome {
    color: #f44006;
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
}

.food-image-container {
    #food-heading {
        width: 550px;
        height: 550px;
        &:hover {
        }
    }
}

@media screen and (max-width: 500px) {
    .bg-img {
        height: 90vh;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 5rem;
    }

    #welcome {
        font-size: 2.5rem;
    }

    #cuisine {
        font-size: 1rem;
    }

    .story {
        margin: auto;

        #first-paragraph {
            width: 80%;
        }

        h2 {
            padding-top: 3rem;
        }

        .our-founders {
            display: flex;
            flex-direction: column;
            margin: auto;

            #food-story-p {
                padding-top: 3rem;
                width: 80%;
                line-height: 1.8rem;
            }
        }
    }

    .food-image-container {
        #food-heading {
            display: none;
        }
    }

    .nav-menu {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 40px;
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
}
</style>