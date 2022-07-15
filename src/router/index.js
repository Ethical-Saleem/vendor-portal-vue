import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
  },
  {
    path: '/request-for-quotes',
    name: 'bid-invitation',
    component: () => import(/* webpackChunkName: "bid-invitation" */ '@/views/BidInvitation.vue')
  },
  {
    path: '/complaint-resolve',
    name: 'complaint-resolve',
    component: () => import(/* webpackChunkName: "complaint-resolve" */ '@/views/Complaint.vue')
  },
  {
    path: '/purchase-order',
    name: 'purchase-order',
    component: () => import(/* webpackChunkName: "purchase-order" */ '@/views/PurchaseOrder.vue')
  },
  {
    path: '/add-new-user',
    name: 'new-profile',
    component: () => import(/* webpackChunkName: "new-profile" */ '@/views/NewProfile.vue')
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    component: () => import(/* webpackChunkName: "password-reset" */ '@/views/PasswordReset.vue')
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import(/* webpackChunkName: "login-page" */ '@/views/Login.vue')
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: () => import(/* webpackChunkName: "forget-password" */ '@/views/ForgetPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
