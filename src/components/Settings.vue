<template>
    <b-card class="container mt-3">
        <b-form-group class="col-3">
            <div class="row"> 
                <div class="mt-3">
                    <label class="mt-3 col-3" for="api-key">Api key</label>
                    <b-form-input class="mt-3 col-3" id="api-key" v-model="ak.key" />
                </div>
            </div>
            <div class="row">
                <div class="mt-3">
                    <label class="mt-3 col-3" for="api-secret">Api secret</label>
                    <b-form-input class="mt-3 col-3" id="api-secret" v-model="ak.secret"></b-form-input>
                </div>
            </div>
            <div class="row"> 
                <div class="mt-3">
                    <b-button id="button" @click="changeApiKeyAsync(ak)">Save</b-button>
                </div>
            </div>
        </b-form-group>
    </b-card>
</template>

<script>
    import { mapActions, mapState  } from 'vuex';


    export default {
        name: 'Settings',
        computed: mapState({
            apiKey: state => state.settings.apiKey
        }),
        methods: mapActions('settings', ['changeApiKeyAsync']),
        data() {
            return {
                ak: {
                    key: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1',
                    secret: 'a74bf3a3-c6bc-4bdd-ab1d-2ced4d08a8d1'
                }
            }
        },
    }
</script>