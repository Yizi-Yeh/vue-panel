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
          title: '首頁',
          // 擁有 Read / Update / Delete / Create 可訪問此路由
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
          title: '查看單筆佈告欄',
          permissions: ['Read User']
        }
      },
      {
        path: 'dashboard/add',
        name: 'DashboardAdd',
        component: () => import('@/views/Dashboard/Add/index.vue'),
        meta: {
          title: '新增佈告欄',
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
        redirect: 'dashboard/list',
        hidden: true
      },
      {
        path: 'dashboard/edit/:id',
        name: 'DashboardEdit',
        hidden: true,
        component: () => import('@/views/Dashboard/Edit/index.vue'),
        meta: {
          title: '編輯單筆佈告欄',
          permissions: ['Update Dashboard']
        }
      },
      {
        path: '/adminmanagement',
        name: 'AdminManagement',
        component: Layout,
        redirect: '/adminmanagement/parking/license-white-list',
        meta: {
          title: 'AdminManagement'
        },
        children: [
          {
            path: '/parking/license-white-list',
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
            }
          },
          {
            path: '/parking/license-white-list/:id',
            name: 'LicenseWhiteListCheck',
            hidden: true,
            component: () => import('@/views/AdminManagement/LicenseWhiteList/View/index.vue'),
            meta: {
              title: 'LicenseWhiteListCheck',
              permissions: ['Read LicenseWhiteList']
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
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    // 查看帳號
    redirect: '/permission/user/list',
    meta: {
      title: '權限管理'
    },
    children: [
      {
        path: '/permission/user/list',
        name: 'UserList',
        component: () => import('@/views/Permission/User/List/index.vue'),
        meta: {
          title: '帳號管理',
          permissions: [
            'Read User',
            'Update User',
            'Delete User',
            'Create User'
          ]
        }
      },
      {
        path: 'list/:id',
        name: 'UserCheck',
        hidden: true,
        component: () => import('@/views/Permission/User/View/index.vue'),
        meta: {
          title: '查看帳號管理',
          permissions: ['Read User']
        }
      },
      {
        path: 'list/add',
        name: 'UserAdd',
        component: () => import('@/views/Permission/User/Add/index.vue'),
        meta: {
          title: '新增帳號',
          permissions: [
            'Read User',
            'Update User',
            'Delete User',
            'Create User'
          ]
        }
      },
      {
        path: 'list/edit',
        redirect: '/permission/user/list',
        hidden: true
      },
      {
        path: 'list/edit/:id',
        name: 'UserEdit',
        hidden: true,
        component: () => import('@/views/Permission/User/Edit/index.vue'),
        meta: {
          title: '編輯帳號',
          permissions: ['Update User']
        }
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
