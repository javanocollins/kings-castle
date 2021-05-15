<template>
    <div class="testimonial-card">
        <div class="image-box">
            <img :src="require(`../../assets/img/customers/${img}`)" alt="" />
        </div>
        <div class="person">
            <p>"{{ comment }}"</p>
            <h3>- {{ name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: String,
        picture: null,
        name: String,
        img: String
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
* {
    font-family: Lato;
}
.testimonial-card {
    width: 20%;
    background-color: #fff;
    padding: 2rem;
    display: flex;
    margin: 3rem 1rem 5rem;
    justify-content: center;
    align-content: center;
    border-radius: 15px;

    /* &:hover {
        background-color: #27b2be;
    } */
}

.person {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;

    h3 {
        font-size: 1.1rem;
        color: #f44006;
    }

    p {
        font-size: 1rem;
        color: #27b2be;
        padding: 1rem 0;
    }
}

.image-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 200px;

    img {
        margin-right: 16px;
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }
}

@media screen and (max-width: 500px) {
    .testimonial-card {
    width: 90%;
    padding: 1.5rem;
    margin: 1rem 1rem;

    /* &:hover {
        background-color: #27b2be;
    } */
}
}
</style>