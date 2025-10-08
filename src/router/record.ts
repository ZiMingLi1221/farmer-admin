import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/chat'
  },
  // {
  //   path: '/sign-in',
  //   name: 'SignIn',
  //   component: () => import('@/views/sign-in/index.vue'),
  //   meta: {
  //     title: '登入',
  //     requiresAuth: false,
  //     hideInMenu: true
  //   }
  // },
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          title: '與AI對話',
          icon: 'ChatbubbleEllipsesOutline',
          affix: true, // 固定頁籤，不可關閉
          keepAlive: true
        }
      },
      {
        path: '/knowledge-base',
        name: 'KnowledgeBase',
        redirect: '/dept-b',
        meta: {
          title: '法規業務知識庫',
          icon: 'LibraryOutline'
        }
      },
      // {
      //   path: '/dept-a',
      //   name: 'DeptA',
      //   component: () => import('@/views/knowledge-base/dept-a/index.vue'),
      //   meta: {
      //     title: '部門A',
      //     parent: 'KnowledgeBase',
      //     keepAlive: true
      //   }
      // },
      {
        path: '/dept-b',
        name: 'DeptB',
        component: () => import('@/views/knowledge-base/dept-b/index.vue'),
        meta: {
          title: '部門B',
          parent: 'KnowledgeBase',
          keepAlive: true
        }
      },
      {
        path: '/dept-c',
        name: 'DeptC',
        component: () => import('@/views/knowledge-base/dept-c/index.vue'),
        meta: {
          title: '部門C',
          parent: 'KnowledgeBase',
          keepAlive: true
        }
      },
      {
        path: '/e-form',
        name: 'EForm',
        component: () => import('@/views/e-form/index.vue'),
        meta: {
          title: '電子表單',
          icon: 'DocumentTextOutline',
          keepAlive: true
        }
      },
      // {
      //   path: '/profile',
      //   name: 'Profile',
      //   component: () => import('@/views/profile/index.vue'),
      //   meta: {
      //     title: '個人中心',
      //     hideInMenu: true,
      //     keepAlive: false
      //   }
      // }
    ]
  },
  // {
  //   path: '/404',
  //   name: 'NotFound',
  //   component: () => import('@/views/error-page/404.vue'),
  //   meta: {
  //     title: '404',
  //     hideInMenu: true,
  //     requiresAuth: false
  //   }
  // },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/chat'
  }
]
