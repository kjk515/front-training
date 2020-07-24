import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
