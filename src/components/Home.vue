<template>
  <div class="content-root">
    <h1>{{ msg }}</h1>
      <b-tabs>
        <b-tab title="Payment">
          <Payment/>
        </b-tab>
        <b-tab title="Settings">
          <Settings/>
        </b-tab>
      </b-tabs>
  </div>
</template>

<script>

import Settings from '@/components/Settings.vue'
import Payment from '@/components/Payment.vue'

export default {
  name: 'Home',
  components: {
    Settings,
    Payment
  },  
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
