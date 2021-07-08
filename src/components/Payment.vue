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
import { mapGetters } from 'vuex';

export default {
    name: "Payment",
    computed: {
        ...mapGetters({
            apiKey: 'getApiKey'
        })
    },
    data() {
        return {
            paymentUrl: "https://pay.demo.paysend.com/paysendPaymentLibrary.umd.min.js",
            cryptoUrl: "https://pay.demo.paysend.com/crypto-js.js",
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
            ak: {
                key: '3d35a1c7a59143e8b1a02585cedee87d',
                secret: '529c941e01f14f7c84f44a749641817b'
            }
        }
    },

    methods: {
        send() {
            let json = window.PaysendBusinessPayment.setPaymentData({
                apiKey: this.ak.key,
                orderId: this.paymentData.orderId,
                description: this.paymentData.description,
                isRecurring: this.paymentData.isRecurring,
                currency: this.paymentData.currency,
                amount: this.paymentData.amount
            })
            
            // eslint-disable-next-line
            let encrypted = CryptoJS.HmacSHA256(json, this.ak.secret)
            window.PaysendBusinessPayment.pay(encrypted);
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
    }
}
</script>