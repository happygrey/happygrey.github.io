const state = () => ({
    apiKey: {
        key: '170481631d834a4a8f73d244d207687e',
        secret: 'bff2c796fb46476f9a6e61c05b7106af'
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