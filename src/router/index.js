import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SushiView from '../views/SushiView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/Sushi', name: 'sushi', component: SushiView },
]

const router = createRouter({
  history: createWebHistory('/projets/TouchOfSushi/'),
  routes,
})

export default router
