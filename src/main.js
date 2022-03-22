import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import store from './store/store.js'
// import VueScheduler from 'v-calendar-scheduler';
// import 'v-calendar-scheduler/lib/main.css';
Vue.config.productionTip = false
//Vue.use(VueScheduler);
Vue.use(Vuex);
new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
}).$mount('#app');
