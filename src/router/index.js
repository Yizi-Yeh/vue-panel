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
          title: 'DashboardList',
          permissions: [
            'Read Dashboard',
            'Update Dashboard',
            'Delete Dashboard',
            'Create Dashboard'
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
            'Read Dashboard',
            'Update Dashboard',
            'Delete Dashboard',
            'Create Dashboard'
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
          permissions: ['Update Dashboard']
        }
      }
    ]
  },
  {
    path: '/adminmanagement',
    name: 'AdminManagement',
    component: Layout,
    redirect: '/adminmanagement/parking',
    meta: {
      title: 'AdminManagement'
    },
    children: [
      {
        path: '/adminmanagement/parking/license-white-list',
        name: 'LicenseWhiteList',
        component: () => import('@/views/AdminManagement/LicenseWhiteList/List/index.vue'),
        meta: {
          title: 'LicenseWhiteList',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        },
        children: [
          {
            path: '/parking/license-white-list/:id',
            name: 'LicenseWhiteListCheck',
            hidden: true,
            component: () => import('@/views/AdminManagement/LicenseWhiteList/List/index.vue'),
            meta: {
              title: 'LicenseWhiteListCheck',
              permissions: ['Read LicenseWhiteList']
            }
          }
        ]

      },
      {
        path: '/adminmanagement/parking/license-admin',
        name: 'LicenseAdmin',
        component: () => import('@/views/AdminManagement/LicenseAdmin/List/index.vue'),
        meta: {
          title: 'LicenseAdmin',
          permissions: [
            'Read LicenseAdminList',
            'Update LicenseAdminList',
            'Delete LicenseAdminList',
            'Create LicenseAdminList'
          ]
        }
      },

      {
        path: '/parking/license-white-list/add',
        name: 'LicenseWhiteListAdd',
        component: () => import('@/views/AdminManagement/LicenseWhiteList/Add/index.vue'),
        meta: {
          title: 'LicenseWhiteListAdd',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        path: '/adminmanagement/parking/license-white-list/edit',
        redirect: '/adminmanagement/parking/license-white-list/',
        hidden: true
      },
      {
        path: '/adminmanagement/parking/license-white-list/edit/:id',
        name: 'LicenseWhiteListEdit',
        hidden: true,
        component: () => import('@/views/AdminManagement/LicenseWhiteList/Edit/index.vue'),
        meta: {
          title: 'LicenseWhiteListEdit',
          permissions: ['Update LicenseWhiteList']
        }
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
