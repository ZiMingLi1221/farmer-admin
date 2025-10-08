<template>
  <div style="height: 64px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <router-link to="/" style="display: flex; align-items: center; gap: 8px; color: inherit; text-decoration: none;">
      <n-icon size="28"><LayersOutline /></n-icon>
      <span style="font-size: 18px; font-weight: 600;">Farmer Admin</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { LayersOutline } from '@vicons/ionicons5'
</script>
