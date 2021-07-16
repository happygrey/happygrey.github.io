const state = () => ({
    apiKey: {
        key: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1',
        secret: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1'
    }    
  })

const getters = {
    getApiKey: (state) => {
        return state.apiKey
    } 
}

const mutations = {
    setApiKey(state, data) {    
        if (this.debug) console.log(JSON.stringify(data))
        
        if (state.apiKey)
            state.apiKey = data;
    }
}

const actions = {
    async changeApiKeyAsync({commit}, payload) {
        commit('setApiKey', payload);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }