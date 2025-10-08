<template>
  <n-dropdown 
    :options="themeOptions" 
    @select="handleThemeSelect"
    trigger="click"
  >
    <n-tooltip trigger="hover" placement="bottom">
      <template #trigger>
        <n-button quaternary circle>
          <template #icon>
            <n-icon size="20">
              <DesktopOutline v-if="themeMode === 'auto'" />
              <MoonOutline v-else-if="themeMode === 'dark'" />
              <SunnyOutline v-else />
            </n-icon>
          </template>
        </n-button>
      </template>
      主題設定
    </n-tooltip>
  </n-dropdown>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { NIcon } from 'naive-ui'
import {
  MoonOutline,
  SunnyOutline,
  DesktopOutline,
  CheckmarkOutline
} from '@vicons/ionicons5'
import { usePreferencesStore } from '@/stores/preferences'

const preferencesStore = usePreferencesStore()
const themeMode = computed(() => preferencesStore.themeMode)

// 渲染圖標
const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 渲染右側勾選標記
const renderSuffix = (isActive: boolean) => {
  if (!isActive) return undefined
  return () => h(NIcon, { color: 'var(--n-color-target)' }, { 
    default: () => h(CheckmarkOutline) 
  })
}

// 主題選項
const themeOptions = computed(() => [
  {
    label: '淺色',
    key: 'light',
    icon: renderIcon(SunnyOutline),
    suffix: renderSuffix(themeMode.value === 'light')
  },
  {
    label: '深色',
    key: 'dark',
    icon: renderIcon(MoonOutline),
    suffix: renderSuffix(themeMode.value === 'dark')
  },
  {
    label: '跟隨系統',
    key: 'auto',
    icon: renderIcon(DesktopOutline),
    suffix: renderSuffix(themeMode.value === 'auto')
  }
])

// 處理主題選擇
const handleThemeSelect = (key: string) => {
  preferencesStore.setThemeMode(key as 'light' | 'dark' | 'auto')
}
</script>
