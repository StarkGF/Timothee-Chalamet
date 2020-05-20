import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.scss'
import router from '@/router'
import store from './store/index'
import animated from 'animate.css'

Vue.use(animated)

Vue.config.productionTip = false
Vue.filter('filterHtml',
  function (val) { // val就是以获取的msg的值
    return val.replace(/<[^>]*>/g)// 去除文字的<...></...>标签
  }
)

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app')
