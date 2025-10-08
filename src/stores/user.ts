import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserInfo {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  permissions: string[]
}

export const useUserStore = defineStore('user', () => {
  // 使用者資訊
  const userInfo = ref<UserInfo | null>({
    id: '1',
    name: '業務員老李',
    email: 'farmer-li@example.com',
    avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    role: '系統管理員',
    permissions: ['admin', 'user:read', 'user:write']
  })

  // Token
  const token = ref<string>('mock-token-123456')

  // 是否已登入
  const isLoggedIn = computed(() => !!token.value)

  // computed properties
  const name = computed(() => userInfo.value?.name || '')
  const email = computed(() => userInfo.value?.email || '')
  const avatar = computed(() => userInfo.value?.avatar || '')
  const role = computed(() => userInfo.value?.role || '')
  const permissions = computed(() => userInfo.value?.permissions || [])

  // 登入
  const login = async (username: string, password: string) => {
    // 模擬登入請求
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        token.value = 'mock-token-' + Date.now()
        userInfo.value = {
          id: '1',
          name: username,
          email: `${username}@example.com`,
          avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
          role: '系統管理員',
          permissions: ['admin', 'user:read', 'user:write']
        }
        resolve()
      }, 1000)
    })
  }

  // 登出
  const logout = () => {
    token.value = ''
    userInfo.value = null
  }

  // 更新使用者資訊
  const updateUserInfo = (info: Partial<UserInfo>) => {
    if (userInfo.value) {
      userInfo.value = { ...userInfo.value, ...info }
    }
  }

  // 檢查權限
  const hasPermission = (permission: string) => {
    return permissions.value.includes(permission)
  }

  // 檢查角色
  const hasRole = (roleToCheck: string) => {
    return role.value === roleToCheck
  }

  return {
    // state
    userInfo,
    token,
    
    // computed
    isLoggedIn,
    name,
    email,
    avatar,
    role,
    permissions,
    
    // actions
    login,
    logout,
    updateUserInfo,
    hasPermission,
    hasRole
  }
}, {
  //persist: true // 若使用 pinia-plugin-persistedstate 可持久化
})
