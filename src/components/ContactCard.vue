<template>
    <div id="contact-card-vue" class="container">
        <h2>Feel free to shoot us a message</h2>
        <div class="contact-card">
            <div class="form">
                <div class="name-form form-item">
                    <p>Name:</p>
                    <input type="text" />
                </div>
                <div class="email-form form-item">
                    <p>Email:</p>
                    <input type="email" />
                </div>
                <div class="message form-item">
                    <p>Message:</p>
                    <textarea name id cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>

#contact-card-vue {
    display: flex;
    justify-content: space-around;
    color: #fff;
        margin: 2rem auto 0;

    h2 {
        font-family: Lato;
        text-align: left;
        font-size: 5rem;
        font-weight: 900;
        text-transform: uppercase;
        color: #fff;
        width: 50%;
        line-height: 1.1;
    }
}

.contact-card {
    width: 600px;
    height: auto;
    // background-color: #fff;
    margin-bottom: 5rem;
    border-radius: 10px;
    box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);
    padding: 2rem;

    #name {
        font-family: "BlackCastleMF";
        color: #f44006;
        font-size: 4rem;
        text-align: center;
    }

    #logo {
        width: 60px;
        padding-top: 0.5rem;
        margin: auto;
        display: block;
    }

    .form {
        p {
            font-size: 1.5rem;
            font-family: Lato;
        }

        input {
            width: 100%;
            padding: 0.7rem;
            margin: 0.5rem 0;
            border: 1.5px solid #f44006;
            font-size: 1rem;
        }

        textarea {
            width: 100%;
            border: 1.5px solid #f44006;
            padding: 0.5rem;
            font-size: 1.5rem;
        }

        .form-item {
            padding: 1rem;
        }
    }
}

@media screen and (max-width: 500px) {
    #contact-card-vue {
        flex-direction: column;
        margin: 0 auto;
        h2 {
            font-size: 1.8rem;
            text-align: center;
            width: 80%;
            line-height: 1.3;
            margin: 2rem auto;
        }

        #number,
        #email {
            font-size: .9rem;
        }
    }

    .contact-card {
        width: 350px;
        margin: 0 auto 5rem;
        padding: 1rem;

        #name {
            font-size: 2rem;
        }

        #logo {
            width: 40px;
            margin-bottom: .9rem;
        }

        .form {
            p {
                font-size: 1rem;
            }

            input {
                padding: 0.3rem;
            }
        }
    }
}
</style>