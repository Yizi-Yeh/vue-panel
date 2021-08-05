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
      }
    ]
  },
  {
    path: '/adminmanagement',
    name: 'AdminManagement',
    component: Layout,
    redirect: '/adminmanagement/parking/license-white-list',
    meta: {
      title: '行政管理系統'
    },
    children: [
      {
        path: '/parking/license-white-list',
        name: 'LicenseWhiteList',
        component: () => import('@/views/AdminManagement/LicenseWhiteList/List/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-車牌白名單',
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
          title: '行政管理系統-停車場管理-查看單筆車牌白名單',
          permissions: ['Read LicenseWhiteList']
        }
      },
      {
        path: '/parking/license-white-list/add',
        name: 'LicenseWhiteListAdd',
        component: () => import('@/views/AdminManagement/LicenseWhiteList/Add/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-新增車牌白名單',
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
          title: '行政管理系統-停車場管理-編輯單筆車牌白名單',
          permissions: ['Update LicenseWhiteList']
        }
      },
      {
        path: '/parking/license-admin',
        name: 'LicenseAdmin',
        // 畫面雖然相同，但抓的資料不同，所以需要另外一個頁面
        component: () => import('@/views/AdminManagement/LicenseAdmin/List/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-停管系統後台',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        path: '/parking/license-admin/:id',
        name: 'LicenseWhiteListCheck',
        hidden: true,
        // 查看單筆車牌白名單
        component: () => import('@/views/AdminManagement/LicenseAdmin/View/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-停管系統後台-查看單筆車牌白名單',
          permissions: ['Read LicenseWhiteList']
        }
      },
      {
        path: '/parking/license-admin/add',
        name: 'LicenseWhiteListAdd',
        component: () => import('@/views/AdminManagement/LicenseWhiteList/Add/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-新增車牌白名單',
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
          title: '行政管理系統-停車場管理-編輯單筆車牌白名單',
          permissions: ['Update LicenseWhiteList']
        }
      }
    ]
  },
  {
    path: '/adminmanagement/access-control',
    name: 'AdminManagement',
    component: Layout,
    redirect: '/adminmanagement/access-control/equipment-control',
    meta: {
      title: '行政管理系統-門禁管理'
    },
    children: [
      {
        // 行政管理系統-門禁管理-管制狀態
        path: '/adminmanagement/access-control/equipment-control',
        name: 'EquipmentControl',
        component: () => import('@/views/AdminManagement/EquipmentControl/List/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-管制狀態',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        // 行政管理系統-門禁管理-白名單
        path: '/adminmanagement/access-control/access-white-list',
        name: 'AccessWhiteList',
        component: () => import('@/views/AdminManagement/AccessWhiteList/List/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-白名單(總覽)',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        path: '/adminmanagement/access-control/access-white-list/:id',
        name: 'AccessWhiteListCheck',
        hidden: true,
        component: () => import('@/views/AdminManagement/AccessWhiteList/View/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-查看單筆門禁白名單',
          permissions: ['Read LicenseWhiteList']
        }
      },
      {
        path: '/adminmanagement/access-control/access-white-list/add',
        name: 'AccessWhiteListAdd',
        component: () => import('@/views/AdminManagement/AccessWhiteList/Add/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-新增門禁白名單',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        path: '/adminmanagement/access-control/access-white-list/edit',
        redirect: '/adminmanagement/access-control/access-white-list/',
        hidden: true
      },
      {
        path: '/adminmanagement/access-control/access-white-list/edit/:id',
        name: 'AccessWhiteLisListEdit',
        hidden: true,
        component: () => import('@/views/AdminManagement/AccessWhiteList/Edit/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-編輯單筆門禁白名單',
          permissions: ['Update LicenseWhiteList']
        }
      },
      {
        path: '/adminmanagement/access-control/access-white-list/invalid-histoty',
        name: 'AccessWhiteListInvalid',
        // 過期門禁白名單的資料
        component: () => import('@/views/AdminManagement/AccessWhiteList/InvalidHistoty/List/index.vue'),
        meta: {
          title: '行政管理系統-門禁管理-查看過期白名單歷史紀錄',
          permissions: [
            'Read LicenseWhiteList',
            'Update LicenseWhiteList',
            'Delete LicenseWhiteList',
            'Create LicenseWhiteList'
          ]
        }
      },
      {
        // 查看過期單筆門禁白名單的紀錄（過期的）
        path: '/adminmanagement/access-control/access-white-list/invalid-histoty/:id',
        name: 'AccessWhiteListInvalidCheck',
        hidden: true,
        // 查看過期單筆車牌白名單
        component: () => import('@/views/AdminManagement/AccessWhiteList/InvalidHistoty/View/index.vue'),
        meta: {
          title: '行政管理系統-停車場管理-停管系統後台-查看單筆過期白名單歷史紀錄',
          permissions: ['Read LicenseWhiteList']
        }
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
        path: '/permission/user/list/:id',
        name: 'UserCheck',
        hidden: true,
        component: () => import('@/views/Permission/User/View/index.vue'),
        meta: {
          title: '查看帳號管理',
          permissions: ['Read User']
        }
      },
      {
        path: '/permission/user/add',
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
      }, {
        path: '/permission/user/login-session',
        name: 'UserSession',
        hidden: true,
        component: () => import('@/views/Permission/User/Record/index.vue'),
        meta: {
          title: '登入紀錄',
          permissions: [
            'Read User',
            'Update User',
            'Delete User',
            'Create User'
          ]
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
