import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    redirect: '/dashboard/list',
    component: Layout,
    children: [
      {
        path: 'dashboard/list',
        name: 'DashboardList',
        component: () => import('@/views/Dashboard/List/index.vue'),
        meta: {
          title: 'List',
          permissions: [
            'Read User',
            'Update User',
            'Delete User',
            'Create User'
          ]
        }
      },
      {
        path: 'dashboard/list/:id',
        name: 'DashboardCheck',
        component: () => import('@/views/Dashboard/View/index.vue'),
        meta: {
          title: 'DashboardCheck',
          permissions: ['Read User']
        }
      },
      {
        path: 'dashboard/add',
        name: 'DashboardAdd',
        component: () => import('@/views/Dashboard/Add/index.vue'),
        meta: {
          title: 'DashboardAdd',
          permissions: [
            'Read User',
            'Update User',
            'Delete User',
            'Create User'
          ]
        }
      },
      {
        path: 'dashboard/edit',
        // 共用list頁面
        redirect: 'dashboard/list',
        hidden: true
      },
      {
        path: 'dashboard/edit/:id',
        name: 'DashboardEdit',
        hidden: true,
        component: () => import('@/views/Dashboard/Edit/index.vue'),
        meta: {
          title: 'DashboardEdit',
          permissions: ['Update User']
        }
      },
      { path: '*', redirect: '', hidden: true }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
