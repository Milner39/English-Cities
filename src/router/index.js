import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import london from '../views/london.vue'
import manchester from "../views/manchester.vue"
import newcastle from '../views/newcastle.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: ContactView
    },
    {
      path: '/london',
      component: london
    },
    {
      path: '/manchester',
      component: manchester
    },
    {
      path: '/newcastle',
      component: newcastle
    },

  ]
})

export default router
