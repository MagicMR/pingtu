import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify';
import VueCropper from "vue-cropper"
Vue.config.productionTip = false
Vue.use(VueCropper)
new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
