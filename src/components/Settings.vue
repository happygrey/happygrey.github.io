<template>
    <b-card class="container mt-3">
        <b-form-group class="col-3">
            <div class="row"> 
                <div class="mt-3">
                    <label class="mt-3 col-3" for="api-key">Api key</label>
                    <b-form-input class="mt-3 col-3" id="api-key" v-model="apiKey.key" />
                </div>
            </div>
            <div class="row">
                <div class="mt-3">
                    <label class="mt-3 col-3" for="api-secret">Api secret</label>
                    <b-form-input class="mt-3 col-3" id="api-secret" v-model="apiKey.secret"></b-form-input>
                </div>
            </div>
            <div class="row"> 
                <div class="mt-3">
                    <b-button id="button" @click="save">Save</b-button>
                </div>
            </div>
        </b-form-group>
    </b-card>
</template>

<script>
    import storeModule  from '../store/store'

    export default {
        name: "Settings",
        methods: {
            save: function() {
                this.storeModule.mutations.setApiKey(this.apiKey)
            },
        },
        data() {
            return {
                apiKey: {
                    key: storeModule.state.apiKey.key,
                    secret: storeModule.state.apiKey.secret
                }
            }
        },
        mounted() {
            
        },
    }
</script>