const storeModule = {
    debug: true,
    state: {
        apiKey: {
            key: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1',
            secret: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1'
        }    
    },
    getters: {

    },
    mutations: {
        setApiKey: function(data) {
            if (this.debug) console.log(JSON.stringify(data))
            
            if (this.state.apiKey)
                this.state.apiKey = data;
        }
    }
}

export default storeModule;