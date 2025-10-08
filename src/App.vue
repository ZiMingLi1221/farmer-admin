<template>
  <n-config-provider :theme="currentTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <router-view />
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme } from 'naive-ui'
import { usePreferencesStore } from '@/stores/preferences'
import { createLightTheme } from '@/theme/light'
import { createDarkTheme } from '@/theme/dark'

const preferencesStore = usePreferencesStore()

const currentTheme = computed(() => {
  return preferencesStore.themeMode === 'dark' ? darkTheme : null
})

const themeOverrides = computed(() => {
  const isDark = preferencesStore.themeMode === 'dark'
  const primaryColor = preferencesStore.primaryColor
  
  return isDark 
    ? createDarkTheme(primaryColor)
    : createLightTheme(primaryColor)
})
</script>
