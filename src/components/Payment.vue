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
                <div class="col-6 mt-3">
                    <label class="mt-3" for="order-id" >Order</label>
                    <b-form-input class="col-3 mt-3" type="text" id="order-id" v-model="paymentData.orderId" />
                </div>
            </div>            
            <div class="row">
                <div class="col-6 mt-3">
                    <label class="mt-3" for="description" >Description</label>
                    <b-form-input class="col-3 mt-3" type="text" id="description" v-model="paymentData.description" />
                </div>
            </div>
            <div class="row">
                <div class="col-6 mt-3">
                    <b-form-checkbox class="col-3 mt-3" id="is-recurring" v-model="paymentData.isRecurring">Is recurring</b-form-checkbox>
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
import { mapState } from 'vuex';

export default {
    name: "Payment",
    computed: mapState({
            apiKey: state => state.settings.apiKey
    }),
    host: '',
    data() {
        return {
            paymentUrl: "http://157.230.120.240/paysendPaymentLibrary.umd.min.js",
            cryptoUrl: "http://157.230.120.240/crypto-js.js",
            appUrl: 'http://157.230.120.240/app.173ec3a9735ad9b5d928.js',
            vendorUrl: 'http://157.230.120.240/vendors.js',
            paymentData: {
                amount: 1,
                currency: null,
                orderId: '1-z',
                description: 'Some test order',
                isRecurring: false
            },
            currencies: [
                { value: null, text: 'Please select an option'},
                { value: 'GBP', text: 'GB Pound'},
                { value: 'USD', text: 'US Dollar'},
                { value: 'RUB', text: 'Russiab ruble'},
            ],
        }
    },

    methods: {
        send() {
            let json = window.PaysendBuisnessPayment.setPaymentData({
                apiKey: this.apiKey.key,
                orderId: this.paymentData.orderId,
                description: this.paymentData.description,
                isRecurring: this.paymentData.isRecurring,
                currency: this.paymentData.currency,
                amount: this.paymentData.amount
            })
            console.log(JSON.stringify(json))
            // eslint-disable-next-line
            let encrypted = window.CryptoJS.HmacSHA256(json, this.apiKey.secret)
            window.PaysendBuisnessPayment.pay(encrypted);
        },
        loadJS(url, location) {
            var script = document.createElement('script');
            script.src = url;

            script.onload = () => console.log('loaded');

            location.appendChild(script);
        },
        clear() {
            this.paymentData = { amount: 0, currency: null }
        }
    },
    created() {
        this.loadJS(this.cryptoUrl, document.body);
        this.loadJS(this.paymentUrl, document.body);
        this.loadJS(this.appUrl, document.body);
    }
}
</script>