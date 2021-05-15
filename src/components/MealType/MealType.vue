<template>
    <div class="meal-type-vue">
        <div class="container">
            <slot></slot>
            <button class="meal-type-btn">Show me the food!</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mealType: String,
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        color: #fff;
        font-size: 5rem;
        font-family: "Dancing Script", sans-serif;
    }

    .meal-type-btn {
        padding: 1rem;
        margin: 1rem;
        border: none;
        color: #000;
        font-size: 14px;
        background-color: #fff;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            color: #fff;
            background-color: transparent;
            border: #fff solid 1px;
            transition: all 0.2s;
        }
    }

    @media screen and (max-width: 500px) {
        h2 {
        font-size: 2.5rem;
    }
    }
}
</style>