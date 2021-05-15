<template>
    <router-link tag="button" :to="route">{{ label }}</router-link>
</template>

<script>
export default {
    props: {
        route: String,
        label: String,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
button {
    margin: 1.5rem 0;
    padding: 1rem;
    font-size: 0.9rem;
    border: 0.1rem #fff solid;
    border-radius: 8px;
    background: none;
    color: #fff;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.2s;
}

button:hover {
    background-color: #f44006;
    border: 0.1rem #f44006 solid;
    transition: all 0.2s;
    transform: scale(1.05);
}

@media screen and (max-width: 500px) {
    button {
        padding: .8rem;
        font-size: 0.7rem;
    }
}
</style>