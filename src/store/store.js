import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    debug: true,
    state: {
        apiKey: {
            key: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1',
            secret: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1'
        }    
    },
    getters: {
        getApiKey: state => {
            return state.apiKey
        } 
    },
    mutations: {
        setApiKey(state, data) {
            if (this.debug) console.log(JSON.stringify(data))
            
            if (state.apiKey)
                state.apiKey = data;
        }
    },
    actions: {
        changeApiKeyAsync({commit}, payload) {
            commit('setApiKey', payload)
        }
    }
});

export default store;