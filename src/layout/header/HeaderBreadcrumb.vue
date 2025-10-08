<template>
  <n-breadcrumb>
    <n-breadcrumb-item>{{ currentTitle }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentTitle = computed(() => route.meta?.title || '首頁')
</script>
