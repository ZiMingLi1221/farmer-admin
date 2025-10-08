import type { Router } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useTabsStore } from '@/stores/tabs'
import { useSystemStore } from '@/stores/system'
import { getPageTitle } from './helper'

// 白名單路由（不需要登入）
const whiteList = ['/sign-in', '/404']

export function setupRouterGuard(router: Router) {
  // 前置守衛
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const systemStore = useSystemStore()
    
    // 開始載入
    systemStore.setLoading(true)

    // 設定頁面標題
    document.title = getPageTitle(to.meta.title as string)

    // 檢查是否需要登入
    const requiresAuth = to.meta.requiresAuth !== false

    if (requiresAuth) {
      // 需要登入
      if (userStore.isLoggedIn) {
        // 已登入
        if (to.path === '/sign-in') {
          // 如果已登入還訪問登入頁，重定向到首頁
          next({ path: '/chat' })
        } else {
          // 檢查權限
          if (to.meta.permissions) {
            const permissions = to.meta.permissions as string[]
            const hasPermission = permissions.some(permission => 
              userStore.hasPermission(permission)
            )
            
            if (hasPermission) {
              next()
            } else {
              // 無權限，重定向到 403 或首頁
              next({ path: '/chat' })
            }
          } else {
            next()
          }
        }
      } else {
        // 未登入，重定向到登入頁
        if (whiteList.includes(to.path)) {
          next()
        } else {
          next({
            path: '/sign-in',
            query: { redirect: to.fullPath }
          })
        }
      }
    } else {
      // 不需要登入
      next()
    }
  })

  // 後置守衛
  router.afterEach((to, from) => {
    const systemStore = useSystemStore()
    const tabsStore = useTabsStore()
    
    // 添加頁籤（排除登入頁和錯誤頁）
    if (to.meta.requiresAuth !== false && !to.meta.hideInMenu) {
      tabsStore.addTab(to)
    }

    // 結束載入
    systemStore.setLoading(false)
  })

  // 錯誤處理
  router.onError((error) => {
    console.error('路由錯誤:', error)
  })
}
