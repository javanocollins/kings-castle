<template>
    <div class="mealsVue">
        <navbar></navbar>
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
        <h1 id="pageTitle">View Our Dishes</h1>

        <meal-type class="breakfast">
            <h2>Breakfast</h2>
        </meal-type>
        <meal-type class="lunch">
            <h2>Lunch</h2>
        </meal-type>
        <div class="container">
            <!-- <div class="meal-flex">
                <app-meal-card
                    imageUrl="img-1.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-2.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-3.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-1.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
            </div>
            <div class="meal-flex">
                <app-meal-card
                    imageUrl="img-4.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-5.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-6.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
                <app-meal-card
                    imageUrl="img-1.jpg"
                    name="Lorem Ipsum"
                    price="$16"
                ></app-meal-card>
            </div> -->
        </div>
    </div>
</template>

<script>
// import MealCard from "../components/MealCard";
import MealType from "../components/MealType/MealType";
export default {
    components: {
        // appMealCard: MealCard,
        MealType,
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
.mealsVue {
    /* padding-bottom: 8rem; */
    background: #21282e;
}

#pageTitle {
    color: #fff;
    font-family: "Dancing Script";
    text-align: center;
    font-size: 4rem;
    margin: 2rem;
    padding-bottom: 3rem;
}

.meal-flex {
    display: flex;
    justify-content: space-around;
}

.container {
    margin: auto;
}

.breakfast {
    background: linear-gradient(to left, #ff6702, #ff7b00);
}

.lunch {
    background: linear-gradient(to left, #8fd118, #2fd200);
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

p {
    color: #fff;
}
@media screen and (max-width: 500px) {
    .mealsVue {
        margin: auto;
    }

    #pageTitle {
    color: #fff;
    font-family: "Dancing Script";
    text-align: center;
    font-size: 3rem;
    margin: 2rem;
    padding-bottom: 3rem;
}

    .meal-flex {
        flex-direction: column;
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