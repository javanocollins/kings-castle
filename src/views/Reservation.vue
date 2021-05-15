<template>
    <div class="res-container bg-img">
        <app-nav></app-nav>
        <div class="reservation">
            <div class="names">
                <div class="input-field">
                    <p>Name:</p>
                    <input type="text" v-model="name" />
                </div>
            </div>
            <div class="contact">
                <div class="input-field">
                    <p>Email:</p>
                    <input type="email" v-model="email" />
                </div>
            </div>
            <div class="people">
                <div class="input-field">
                    <p>Number of People:</p>
                    <input type="number" v-model="people" />
                </div>
                <div class="input-field">
                    <p>Phone:</p>
                    <input type="text" v-model="phone" />
                </div>
            </div>
            <date-pick
                v-model="date"
                :hasInputElement="false"
                :format="format"
                :parseDate="parseDate"
                :formatDate="formatDate"
                :inputAttributes="{size: 32}"
            ></date-pick>
            <button @click="register">Make A Reservation</button>
        </div>
    </div>
</template>

<script>
// import AuthenticationService from '@/services/AuthenticationService'
import Nav from "../components/Navbar/Nav";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import fecha from "fecha";
export default {
    components: {
        appNav: Nav,
        datePick: DatePick,
    },
    data() {
        return {
            name: '',
            email: '',
            people: '',
            phone: '',
            date: fecha.format(new Date(), "dddd MMMM Do, YYYY"),
            format: "dddd MMMM Do, YYYY"
        };
    },
    methods: {
        parseDate(dateString, format) {
            return fecha.parse(dateString, format);
        },
        formatDate(dateObj, format) {
            return fecha.format(dateObj, format);
        },
        logDate() {
            console.log(this.date)
        },
        async register() {
            // const response = await AuthenticationService.register({
            //     name: this.name,
            //     email: this.email,
            //     people: this.people,
            //     phone: this.phone,
            //     date: this.date

            // })
            // console.log(response.data)
        }
    },
};
</script>

<style scoped lang="scss">
@import "vue-date-pick/src/vueDatePick.scss";
$vdpColor: #cc99cd;

.bg-img {
    width: 100%;
    // height: 100vh;
    overflow: hidden;
    background: url("../assets/img/bg-reservation.png");
    // min-height: 380px;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Needed to position the navbar */
    position: relative;
}

// .res-container {
//     background: rgb(124, 124, 124);
// }

.reservation {
    margin: auto;
    max-width: 600px;
    height: 100vh;
}

.names,
.people,
.contact {
    p {
        color: #fff;
        font-family: Lato;
        font-size: 1.2rem;
        text-align: left;
    }

    input {
        padding: 0.8rem;
        margin: 0.5rem 0 1rem;
    }
}

.people {
    display: flex;
    div {
        flex: 1;
    }
}

input {
    width: 100%;
}

button {
    padding: 1rem;
    border: 0.1rem #fff solid;
    background: none;
    color: #fff;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
}

button:hover {
    background-color: #f44006;
    border: none;
    transition: all 0.2s;
}

li {
    background: #f44006;
}
</style>