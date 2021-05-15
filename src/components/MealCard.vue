<template>
    <div class="meal-box">
        <div class="meal-box-div">
            <img :src="require(`../assets/img/meals/${imageUrl}`)" alt />
            <div class="description">
                <div class="name-price">
                    <p>{{ name }}</p>
                    <p>{{ price }}</p>
                </div>
                <p id="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <button id="add-cart" @click="increment">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        name: String,
        price: String,
    },
    methods: {
        increment() {
            this.$store.state.cartItems++;
        },
    },
};
</script>

<style scoped lang="scss">
.meal-box {
    margin: 1.5rem;
    .meal-box-div {
        background-color: #fff;
        width: 100%;
        border-radius: 0;

    }
}

img {
    width: 290px;
    height: 240px;
    border-radius: 0 0 15px 15px;
}

.description {
    padding: 1rem 1.1rem;
    #paragraph {
        line-height: 1.3;
    }
}

.name-price {
    /* display: flex; */
    justify-content: space-between;
    margin-bottom: 10px;
    p {
        font-size: 1.2rem;
        font-family: Lato;
        font-weight: bold;
    }
}

#add-cart {
    width: 100%;
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0;
    background-color: #f44006;
    cursor: pointer;
}

@media screen and (max-width: 500px) {
    .meal-box {
        width: 90%;
        margin: auto;
    }

    img {
        width: 100%;
        height: 200px;
    }

    .description {
        padding: 0.8rem;
    }

    .name-price {
        p {
            font-size: 1.2rem;
        }
    }

    #add-cart {
        padding: 1.2rem;
        font-size: 1rem;
    }
}
</style>