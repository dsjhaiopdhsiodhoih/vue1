import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import TodoList from '../components/todolist_main.vue'
import Profile from '../components/Profile.vue'
import login from '../components/login.vue'
import { useAuthStore } from '../store';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/todolist',
//     name: 'todoList',
//     component: TodoList
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: Profile
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'todoList',
      component: TodoList,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ],
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); 
  } else {
    next(); 
  }
});


export default router
