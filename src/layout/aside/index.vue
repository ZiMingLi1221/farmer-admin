<template>
  <n-layout-sider
    v-model:collapsed="collapsed"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :inverted="inverted"
  >
    <SidebarLogo :collapsed="collapsed" />
    <SidebarMenu :collapsed="collapsed" :inverted="inverted" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePreferencesStore } from '@/stores/preferences'
import { useSidebarStore } from '@/stores/sidebar'
import SidebarLogo from './SidebarLogo.vue'
import SidebarMenu from './SidebarMenu.vue'

const preferencesStore = usePreferencesStore()
const sidebarStore = useSidebarStore()

const inverted = computed(() => preferencesStore.sidebarInverted)
const collapsed = computed({
  get: () => sidebarStore.collapsed,
  set: (value) => {
    sidebarStore.collapsed = value  // ← 直接修改，不用 setCollapsed
  }
})
</script>
