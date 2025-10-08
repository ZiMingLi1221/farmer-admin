import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 頁面標題 */
    title?: string
    /** 圖標名稱 */
    icon?: string
    /** 是否需要登入 */
    requiresAuth?: boolean
    /** 需要的權限 */
    permissions?: string[]
    /** 是否在選單中隱藏 */
    hideInMenu?: boolean
    /** 是否固定頁籤（不可關閉） */
    affix?: boolean
    /** 是否啟用 keep-alive */
    keepAlive?: boolean
    /** 父級路由名稱 */
    parent?: string
    /** 排序權重 */
    order?: number
  }
}
