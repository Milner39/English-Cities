import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CityView from '../views/CityView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/contact",
      component: ContactView
    },
    {
      path: "/city/:city",
      component: CityView
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView
    }
  ]
})

export default router
