<template>
    <section class="dessert">
        <div class="dessert-container">
            <h2 id="dessert-title">Delight Experience</h2>
            <p id="dessert-slogan">Fresh. Fast. Tasty.</p>
            <p id="dessert-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                molestias quibusdam vel sint.
            </p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dessert {
    width: 100%;
    height: 60vh;
    overflow: hidden;
    background: url("../../assets/img/dessert.png");
    min-height: 380px;
    display: flex;
    flex-direction: column;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Needed to position the navbar */
    position: relative;

    .dessert-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
    }

    #dessert-title {
        color: #f44006;
        font-family: "Dancing Script", cursive;
        font-size: 5rem;
        padding-top: 5rem;
        padding-bottom: 1rem;
        text-align: left;
    }

    #dessert-slogan {
        text-align: left;
        color: #fff;
        font-family: "Lato";
        font-weight: 900;
        font-size: 3rem;
        letter-spacing: 2.5px;
    }

    #dessert-description {
        color: rgb(161, 161, 161);
        font-family: "Lato";
        width: 50%;
        line-height: 32px;
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 500px) {
    .dessert {
            justify-content: center;
            height: 40vh;
        .dessert-container {
            margin: 0 auto;
            align-items: center;
        }

        #dessert-title {
            text-align: center;
            color: #f44006;
            font-size: 3rem;
            padding-top: 0;
        }

        #dessert-slogan {
            text-align: center;
            font-size: 2rem;
            letter-spacing: 1px;
        }

        #dessert-description {
            width: 80%;
            margin-top: 1rem;
            line-height: 25px;
            font-size: 1.2rem;
            text-align: center;
        }
    }
}
</style>