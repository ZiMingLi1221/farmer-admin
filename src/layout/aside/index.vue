<template>
  <n-layout-sider
    bordered
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :inverted="inverted"
  >
    <!-- Logo -->
    <SidebarLogo />

    <!-- 選單 -->
    <SidebarMenu :inverted="inverted" />

    <!-- 用戶面板 -->
    <SidebarUserPanel :inverted="inverted" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePreferencesStore } from '@/stores/preferences'
import SidebarLogo from './SidebarLogo.vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarUserPanel from './SidebarUserPanel.vue'

const preferencesStore = usePreferencesStore()
const inverted = computed(() => preferencesStore.sidebarInverted)
</script>
