import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreferencesStore = defineStore('preferences', () => {
  // 側邊欄是否反色（深色模式）
  const sidebarInverted = ref(false)
  
  // 主題模式：'light' | 'dark' | 'auto'
  const themeMode = ref<'light' | 'dark' | 'auto'>('light')
  
  // 主題色
  const primaryColor = ref('#18a058')
  
  // 布局模式：'vertical' | 'horizontal' | 'mix'
  const layoutMode = ref<'vertical' | 'horizontal' | 'mix'>('vertical')
  
  // 是否顯示頁籤
  const showTabs = ref(true)
  
  // 是否顯示麵包屑
  const showBreadcrumb = ref(true)
  
  // 是否啟用動效
  const enableAnimation = ref(true)

  // 切換側邊欄反色
  const toggleSidebarInverted = () => {
    sidebarInverted.value = !sidebarInverted.value
  }

  // 設定主題模式
  const setThemeMode = (mode: 'light' | 'dark' | 'auto') => {
    themeMode.value = mode
  }

  // 設定主題色
  const setPrimaryColor = (color: string) => {
    primaryColor.value = color
  }

  // 重置所有偏好設定
  const resetPreferences = () => {
    sidebarInverted.value = false
    themeMode.value = 'light'
    primaryColor.value = '#18a058'
    layoutMode.value = 'vertical'
    showTabs.value = true
    showBreadcrumb.value = true
    enableAnimation.value = true
  }

  return {
    // state
    sidebarInverted,
    themeMode,
    primaryColor,
    layoutMode,
    showTabs,
    showBreadcrumb,
    enableAnimation,
    
    // actions
    toggleSidebarInverted,
    setThemeMode,
    setPrimaryColor,
    resetPreferences
  }
}, {
  //persist: true // 若使用 pinia-plugin-persistedstate 可持久化
})
