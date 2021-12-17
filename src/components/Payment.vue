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
    computed: {
        localComputed() {
            return {
                paymentUrl:  `${this.host}/paysendPaymentLibrary.umd.min.js`,
                cryptoUrl:   `${this.host}/crypto-js.js`
            }
        },
        ...mapState({
            apiKey: state => state.settings.apiKey,

        })
    },
    data() {
        return {
            // host: 'https://pay.demo.paysend.com',
            host: 'https://localhost:8081',
            paymentData: {
                amount: 1,
                currency: null,
                orderId: this.uuidv4(),
                description: 'Some test order',
                isRecurring: false
            },
            currencies: [
                { value: null, text: 'Please select an option'},
                { value: 'GBP', text: 'GB Pound'},
                { value: 'EUR', text: 'Euro' },
                { value: 'USD', text: 'US Dollar'},
                { value: 'RUB', text: 'Russian ruble'},
            ],
        }
    },

    methods: {
        send() {
            const json = window.PaysendBusinessPayment.setPaymentData({
                apiKey: this.apiKey.key,
                orderId: this.paymentData.orderId,
                description: this.paymentData.description,
                isRecurring: this.paymentData.isRecurring,
                currency: this.paymentData.currency,
                amount: Number(this.paymentData.amount)
            });
            console.log('json', JSON.stringify(json))
            const encrypted = window.CryptoJS.HmacSHA256(json, this.apiKey.secret)
            console.log('encrypted', encrypted);

            let eventMessage = {
				eventType: 'PaysendBusiness_OpenModal',
				details: encrypted
			};

            window.postMessage(eventMessage, window.PaysendBusinessPayment.PaysendBusinessPaymentHost);        
        },
        loadJS(url, location, type = 'text/javascript') {
            let script = document.createElement('script');
            script.src = url;
            script.type = type;
            location.appendChild(script);
            script.onload = () => console.log('loaded');
        },
        clear() {
            this.paymentData = { amount: 0, currency: null }
        },
        uuidv4() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		}
    },
    created() {
        this.loadJS('crypto-js.js', document.body);
        this.loadJS("paysendPaymentLibrary.umd.min.js", document.body);
    }
}
</script>