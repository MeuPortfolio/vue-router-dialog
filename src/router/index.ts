import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Page',
    component: () => import('../views/Page.vue')
  },
  {
    path: '/dialog-content',
    name: 'DialogContent',
    meta: {
      dialog: true
    },
    components: {
      default: () => import('../views/Page.vue'),
      dialog: () => import('../views/DialogContent.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, _from, next) => {
  if (to.meta.dialog) router.app.$emit('dialog')
  next()
})

export default router
