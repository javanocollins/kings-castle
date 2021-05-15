<template>
    <section class="founders">
        <div class="our-founders">
            <h2 id="our-founder">Our Founder</h2>
            <p id="our-founder-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae ipsa repellendus dignissimos corrupti ullam
                obcaecati, ad rerum nemo perferendis, aspernatur atque! Modi
                minus rem corporis consectetur quam nam, adipisci laudantium.
            </p>
        </div>
        <div class="story">
            <div>
                <app-story-img></app-story-img>
            </div>
            <div class="food-story-container">
                <h2 id="food-story">Food Story</h2>
                <p id="food-story-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    cupiditate ill um atque reprehenderit aperiam est
                    repudiandae laborum laboriosam dolores sit saepe fuga
                    possimus, necessitatibus maiores illo impedit modi
                    doloremque odio! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                </p>
                <Btn label="Read More" route="/register" />
            </div>
        </div>
    </section>
</template>

<script>
import StoryImg from "../../components/StoryImg";

export default {
    components: {
        appStoryImg: StoryImg,
    },
};
</script>

<style lang="scss" scoped>
.founders {
    background-color: (#212830);
    padding-bottom: 5rem;
    font-size: 2rem;
    margin: auto;

    #our-founder {
        color: #f44006;
        font-family: "Dancing Script", cursive;
        font-size: 5rem;
        text-align: center;
        padding-top: 5rem;
    }

    #our-founder-p {
        font-size: 1.1rem;
        font-family: Lato;
        padding: 2rem 0 4rem 0;
        width: 50%;
        text-align: center;
        color: #fff;
        margin: auto;
        line-height: 1.5;
    }

    .story {
        display: flex;
        justify-content: center;

        .food-story-container {
            width: 40%;
            padding: 4rem;

            #food-story {
                color: #f44006;
                font-family: "Dancing Script", cursive;
                font-size: 5rem;
            }

            #food-story-p {
                font-size: 1.1rem;
                font-family: Lato;
                color: #fff;
                line-height: 1.5;
                padding: 2rem 0 0 0;
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .founders {
        background-color: (#212830);
        padding-bottom: 1rem;
        margin: auto;

        #our-founder {
            color: #f44006;
            font-family: "Dancing Script", cursive;
            font-size: 3rem;
            text-align: center;
            padding-top: 3.5rem;
        }

        #our-founder-p {
            font-size: 1.1rem;
            padding: 2rem 0 1rem;
            width: 90%;
            line-height: 1.5;
        }

        .story {
            flex-direction: column;
            justify-content: center;

            .food-story-container {
                width: 100%;
                margin: 0 auto;
                padding: 2rem;
                text-align: center;
                #food-story {
                    color: #f44006;
                    font-family: "Dancing Script", cursive;
                    font-size: 3rem;
                }

                #food-story-p {
                font-size: 1.1rem;
                font-family: Lato;
                color: #fff;
                line-height: 1.5;
                padding: 1rem 0 0 0;
            }
            }
        }
    }
}
</style>