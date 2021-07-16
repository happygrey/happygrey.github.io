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
                    key: '3d35a1c7a59143e8b1a02585cedee87d',
                    secret: '529c941e01f14f7c84f44a749641817b'
                }
            }
        },
    }
</script>