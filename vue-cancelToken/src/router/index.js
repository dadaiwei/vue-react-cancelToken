import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home'),
      redirect: '/data'
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/Data')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/Message')
    }
  ]
})

