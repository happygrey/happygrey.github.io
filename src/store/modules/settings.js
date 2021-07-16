const state = () => ({
    apiKey: {
        key: '3d35a1c7a59143e8b1a02585cedee87d',
        secret: '529c941e01f14f7c84f44a749641817b'
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