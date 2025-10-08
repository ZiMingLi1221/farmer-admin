<template>
  <n-button quaternary circle @click="sidebarStore.toggle()">
    <template #icon>
      <n-icon size="20">
        <MenuOutline />
      </n-icon>
    </template>
  </n-button>
</template>

<script setup lang="ts">
import { MenuOutline } from '@vicons/ionicons5'
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>
