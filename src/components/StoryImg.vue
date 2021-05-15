<template>
    <div class="story-img">
        <img class="story-img1" src="../assets/img/story-img1.jpg" alt />
        <img class="story-img2" src="../assets/img/story-img2.jpg" alt />
        <img class="story-img3" src="../assets/img/story-img3.jpg" alt />
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.story-img {
    margin-top: 3rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100px 200px 200px;
    padding: 0 3rem;
}

.story-img1 {
    width: 260px;
    grid-column: 3;
    grid-row: 1/3;
}
.story-img2 {
    grid-column: 1;
    grid-row: 2;
}

.story-img3 {
    grid-column: 1/3;
    grid-row: 1;
}

.story-img2,
.story-img3 {
    width: 300px;
}
.story-img3 {
    margin-top: -1rem;
}

@media screen and (max-width: 500px) {
    .story-img {
        /* margin-top: 3rem; */
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
        margin: auto;

        img {
            padding: 0.5rem 0;
        }
    }

    .story-img1{
        display: none;
    }
    .story-img2{
        display: none;
    }
    .story-img3{
        display: none;
    }

}
</style>