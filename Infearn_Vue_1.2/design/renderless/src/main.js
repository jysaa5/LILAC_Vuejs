import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1 단계
  render: function (createElement) {
    return createElement(App);
  },
  // 2 단계
  render: function (h) {
    return h(App);
  },
  // 3 단계
  render: (h) => {
    return h(App);
  },
  // 4 단계
  render: h => h(App),
}).$mount('#app')