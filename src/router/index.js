import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import TodoList from '../components/todolist_main.vue'
import Profile from '../components/Profile.vue'

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
      component: TodoList
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
})


export default router
