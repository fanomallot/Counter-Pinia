
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import DetailView from './components/DetailView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Detail',
    name: 'detail',
    component: DetailView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

