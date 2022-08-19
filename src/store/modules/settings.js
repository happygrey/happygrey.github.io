const state = () => ({
    apiKey: {
        key: '',
        secret: ''
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