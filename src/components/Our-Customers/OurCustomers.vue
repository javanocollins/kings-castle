<template>
    <section class="our-customers">
        <h2>Our Customers</h2>
        <div class="testimonials-container">
            <TestimonialCard
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit "
                :name="item"
                v-for="(item, index) in names"
                :img="images[index]"
                :key="index"
            />
        </div>
    </section>
</template>

<script>
import TestimonialCard from "../Our-Customers/TestimonialCard";
export default {
    components: {
        TestimonialCard,
    },
    data() {
        return {
            names: [
                "Sarah Jones",
                "Aja McKinney",
                "Rose Johnson",
                "Adrian Harper",
            ],
            images: [
                "customer1.jpg",
                "customer2.jpg",
                "customer3.jpg",
                "customer4.jpg",
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.our-customers {
    background-color: (#2a333d);
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.testimonials-container {
    display: flex;
    justify-content: center;
}

h2 {
    color: #fff;
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    text-align: center;
    padding-top: 5rem;
}

img {
    width: 50px;
}

@media screen and (max-width: 500px) {
    .our-customers {
        background-color: (#212830);
        padding: 0 1.5rem 5rem;
    }

    .testimonials-container {
        flex-direction: column;
    }

    h2 {
        color: #fff;
        font-family: "Dancing Script", cursive;
        font-size: 3rem;
        text-align: center;
        padding-bottom: 3rem;
    }
}
</style>