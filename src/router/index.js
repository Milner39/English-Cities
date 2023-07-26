import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import london from '../views/london.vue'
import newcastle from '../views/newcastle.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/london',
      component: london
    },
    {
      path: '/newcastle',
      component: newcastle
    },

  ]
})

export default router
