import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
