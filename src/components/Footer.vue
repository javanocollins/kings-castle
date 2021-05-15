<template>
    <div class="footer">
        <div class="social-media">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
        </div>
        <div class="site-links">
            <router-link to="/" tag="li">
                <a>Home</a>
            </router-link>

            <router-link to="/meals" tag="li">
                <a>Meals</a>
            </router-link>

            <router-link id="about-link" to="/about" tag="li">
                <a>About</a>
            </router-link>

            <router-link id="contact-link" to="/contact" tag="li">
                <a>Contact</a>
            </router-link>
        </div>
        <p id="copyright">
            &copy; 2020, King's Castle Cuisine, All Rights Reserved
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
* {
    font-family: Lato;
}

.footer {
    background-color: rgb(27, 27, 27);
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-media {
        .fab {
            font-size: 2rem;
            margin: 0.5rem 1rem;

            &:hover {
                color: #fff;
                cursor: pointer;
            }
        }

        .fa-facebook {
            color: #1877f2;
        }

        .fa-instagram {
            color: #c32aa3;
        }
        .fa-twitter {
            color: #1da1f2;
        }
    }

    .site-links {
        display: flex;
        margin: 2rem;

        a {
            color: #fff;
            padding: 0.5rem;
            font-size: .8rem;
            text-transform: uppercase;
        }
    }

    #copyright {
        color: rgb(148, 148, 148);
        margin-top: 1rem;
    }
}

@media screen and (max-width: 500px) {
    #copyright {
        text-align: center;
    }
}
</style>