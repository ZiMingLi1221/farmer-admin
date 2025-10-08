import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export interface TabItem {
  name: string
  path: string
  title: string
  icon?: string
  closable: boolean
}

export const useTabsStore = defineStore('tabs', () => {
  // 頁籤列表
  const tabs = ref<TabItem[]>([
    {
      name: 'chat',
      path: '/chat',
      title: '與AI對話',
      closable: false
    }
  ])

  // 當前激活的頁籤
  const activeTab = ref('/chat')

  // 添加頁籤
  const addTab = (route: RouteLocationNormalizedLoaded) => {
    const exists = tabs.value.find(tab => tab.path === route.path)
    if (!exists) {
      tabs.value.push({
        name: route.name as string,
        path: route.path,
        title: (route.meta.title as string) || route.name as string,
        icon: route.meta.icon as string,
        closable: route.meta.affix !== true
      })
    }
    activeTab.value = route.path
  }

  // 關閉頁籤
  const removeTab = (path: string) => {
    const index = tabs.value.findIndex(tab => tab.path === path)
    if (index > -1) {
      tabs.value.splice(index, 1)
    }
  }

  // 關閉其他頁籤
  const removeOtherTabs = (path: string) => {
    tabs.value = tabs.value.filter(tab => tab.path === path || !tab.closable)
  }

  // 關閉所有頁籤
  const removeAllTabs = () => {
    tabs.value = tabs.value.filter(tab => !tab.closable)
  }

  return {
    // state
    tabs,
    activeTab,
    
    // actions
    addTab,
    removeTab,
    removeOtherTabs,
    removeAllTabs
  }
})
