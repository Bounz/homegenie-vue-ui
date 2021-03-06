// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

// translations
import LocalizationService from '@/services/localization'
LocalizationService.setLang('ru')
Vue.config.fallbackLang = 'en' 

// Vue.config.missingHandler = function(args)
// {
//   alert (args)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
