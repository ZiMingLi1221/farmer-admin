import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSystemStore = defineStore('system', () => {
  // 裝置類型
  const deviceType = ref<'mobile' | 'tablet' | 'desktop'>('desktop')
  
  // 是否全螢幕
  const isFullscreen = ref(false)
  
  // 載入狀態
  const loading = ref(false)
  
  // 視窗寬度
  const windowWidth = ref(window.innerWidth)
  
  // 視窗高度
  const windowHeight = ref(window.innerHeight)

  // 更新裝置類型
  const updateDeviceType = () => {
    const width = window.innerWidth
    if (width < 768) {
      deviceType.value = 'mobile'
    } else if (width < 1024) {
      deviceType.value = 'tablet'
    } else {
      deviceType.value = 'desktop'
    }
  }

  // 切換全螢幕
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      isFullscreen.value = true
    } else {
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  }

  // 設定載入狀態
  const setLoading = (value: boolean) => {
    loading.value = value
  }

  // 更新視窗尺寸
  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
    updateDeviceType()
  }

  return {
    // state
    deviceType,
    isFullscreen,
    loading,
    windowWidth,
    windowHeight,
    
    // actions
    updateDeviceType,
    toggleFullscreen,
    setLoading,
    updateWindowSize
  }
})
