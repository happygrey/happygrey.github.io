<template>
    <b-card class="container mt-3">
        <b-form-group class="col">
            <div class="row">
                <div class="col-6 mt-3">
                    <label class="col-3 mt-3" for="amount" >Amount</label>
                    <b-form-input class="col-3 mt-3" type="number" id="amout" v-model="paymentData.amount" />
                </div>
            </div>
            <div class="row">
                <div class="col-6 mt-3">
                    <label class="col-3 mt-3" for="currency">Currency</label>
                    <b-form-select class="col-9 mt-3" id="currency" v-model="paymentData.currency" :options="currencies" />
                </div>
            </div>
            <div class="row">
                <div class="col-3 mt-3">
                    <b-button class="mt-3" @click="send" id="pay-button">Pay</b-button>
                </div>
                <div class="col-3 mt-3">
                    <b-button class="col-6 mt-3" @click="clear" id="clear-button">Cancel and clear</b-button>
                </div>
            </div>
        </b-form-group>˙

    </b-card>
</template>

<script>
import storeModule  from '../store/store'

export default {
    name: "Payment",
    data() {
        return {
            apiKey: {
                key: storeModule.state.apiKey.key,
                secret: storeModule.state.apiKey.secret
            },
            paymentData: {
                amount: 0,
                currency: null
            },
            currencies: [
                { value: null, text: 'Please select an option'},
                { value: 'GBP', text: 'GB Pound'},
                { value: 'USD', text: 'US Dollar'},
                { value: 'RUB', text: 'Russiab ruble'},
            ]
        }
    },
    props: {

    },
    methods: {
        send: function() {

        },
        clear: function() {
            this.paymentData = { amount: 0, currency: null }
        }
    },

}
</script>