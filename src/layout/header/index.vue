<template>
  <n-layout-header bordered style="height: 64px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between;">
    <n-breadcrumb>
      <n-breadcrumb-item>{{ currentTitle }}</n-breadcrumb-item>
    </n-breadcrumb>

    <n-space>
      <n-button quaternary circle @click="toggleTheme">
        <template #icon>
          <n-icon size="20">
            <MoonOutline v-if="themeMode === 'light'" />
            <SunnyOutline v-else />
          </n-icon>
        </template>
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { usePreferencesStore } from '@/stores/preferences'

const route = useRoute()
const preferencesStore = usePreferencesStore()

const currentTitle = computed(() => route.meta?.title || '首頁')
const themeMode = computed(() => preferencesStore.themeMode)

const toggleTheme = () => {
  preferencesStore.setThemeMode(
    preferencesStore.themeMode === 'light' ? 'dark' : 'light'
  )
}
</script>
