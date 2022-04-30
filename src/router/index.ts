import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/contact',
    name: "Contact Us",
    component: () => import("@/views/Contact.vue")
  },
  {
    path: '/donate-and-volunteer',
    name: "Donate and Volunteer",
    component: () => import("@/views/DonateAndVolunteer.vue")
  },
  {
    path: '/candidates',
    name: "Candidates",
    component: () => import("@/views/Candidates.vue")
  },
  {
    path: '/sign-up',
    name: "Signature of support",
    component: () => import("@/views/SignUp.vue")
  },
  {
    path: '/platform',
    name: "Platform",
    component: () => import("@/views/Platform.vue")
  },
  // {
  //   path: '/news',
  //   name: "News",
  //   component: () => import("@/views/News.vue")
  // },
  { path: "/:pathMatch(.*)*", component: () => import('@/views/NotAvailable.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 })
        }, 0)
      })
    }
  }
})

export default router
