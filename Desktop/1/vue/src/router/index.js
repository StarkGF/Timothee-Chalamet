import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import ERROR from '../views/404-error'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'Main' },
  { path: '/main', component: Main },
  { path: '/login', component: Login },
  { path: '*', component: ERROR }
]

const router = new VueRouter({
  // mode: history,
  // base: process.env.BASE_URL,
  routes
})

export default router
