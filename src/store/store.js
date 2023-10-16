import Vue from 'vue';
import Vuex from 'vuex';
import catForm from './modules/catForm';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cats: [],
    },
    getters: {
        getAllCats(state) {
            return state.cats
        },  
    },
    actions: {
        fetchCats(context) {
            fetch('https://api.thecatapi.com/v1/images/search?limit=10')
                .then(result => {
                    result.json().then(
                        data => {
                            const result = {
                                type: 'increment',
                                data: data,
                            }
                            context.commit('updateCats', result)
                        }
                    )

                })
        },
    },
    mutations: {
        updateCats(state, result) {
            state.cats = result.data;
        }
    },
    modules: {
        catForm,
    }
})