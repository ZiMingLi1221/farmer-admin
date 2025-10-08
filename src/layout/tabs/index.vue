<template>
  <div 
    v-if="showTabs"
    style="height: 48px; padding: 0 24px; display: flex; align-items: center; border-bottom: 1px solid #e0e0e0;"
  >
    <n-space :size="8">
      <n-tag
        v-for="tab in tabs"
        :key="tab.path"
        :type="isActive(tab.path) ? 'primary' : 'default'"
        :closable="tab.closable"
        @click="handleClick(tab.path)"
        @close="handleClose(tab.path)"
        style="cursor: pointer;"
      >
        {{ tab.title }}
      </n-tag>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePreferencesStore } from '@/stores/preferences'
import { useTabsStore } from '@/stores/tabs'

const router = useRouter()
const route = useRoute()
const preferencesStore = usePreferencesStore()
const tabsStore = useTabsStore()

const showTabs = computed(() => preferencesStore.showTabs)
const tabs = computed(() => tabsStore.tabs)

const isActive = (path: string) => route.path === path

const handleClick = (path: string) => {
  router.push(path)
}

const handleClose = (path: string) => {
  tabsStore.removeTab(path)
  if (route.path === path && tabsStore.tabs.length > 0) {
    const lastTab = tabsStore.tabs[tabsStore.tabs.length - 1]
    if (lastTab) router.push(lastTab.path)
  }
}
</script>
