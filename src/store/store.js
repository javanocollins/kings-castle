import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        meals: [
            {
                id: 1,
                name: "Meal 1",
                image: "@/assets/img/meals/img-1.jpg",
            },
        ],
        StoreCart: [],
        cartItems: 0,
    },

    mutations: {
        ADD_Item(state, id) {
            state.StoreCart.push(id);
        },

        REMOVE_Item(state, index) {
            state.StoreCart.splice(index, 1);
        },
    },

    getters: {
        meals: (state) => state.meals,
        StoreCart: (state) => state.StoreCart,
    },

    actions: {
        addItem(context, id) {
            context.commit("ADD_Item", id);
        },
        
        removeItem(context, index) {
            context.commit('REMOVE_Item', index)
        }
    },
    
    modules: {},
});
