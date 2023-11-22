// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
document.addEventListener("DOMContentLoaded", function(event) {

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  PrimeVue,
  components: { App },
  template: '<App/>'
})
//change theme of primevue to lara dark
}); 