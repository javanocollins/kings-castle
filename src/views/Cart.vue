<template>
    <div id="cart-vue">
        <app-nav></app-nav>
        <div class="container">
            <h1 id="title">Cart</h1>
            <div>
                <div>
                    <button @click="removeAllItems" class="remove-items-btn">Remove All Items</button>
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
    methods: {
        removeAllItems() {
            this.$store.state.cartItems = 0;
        },
    },
};
</script>

<style lang='scss' scoped>
#cart-vue {
    background-color: #21282e;
}

#title {
    font-family: $dancing-font;
    color: $red-color;
    text-align: center;
    font-size: $h1-size;
}

.remove-items-btn {
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0;
    background-color: $blue-color;
    cursor: pointer;
}
</style>