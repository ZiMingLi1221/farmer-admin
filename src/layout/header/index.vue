<template>
  <n-layout-header 
    bordered 
    :style="{
      height: '64px',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }"
  >
    <!-- 左側：切換按鈕 + 麵包屑 -->
    <n-space :size="12" align="center">
      <SidebarToggle />
      <HeaderBreadcrumb />
    </n-space>

    <!-- 右側：主題切換 + 用戶選單 -->
    <n-space :size="12" align="center">
      <HeaderThemeToggle />
      <HeaderUserMenu />
    </n-space>
  </n-layout-header>
</template>

<script setup lang="ts">
import SidebarToggle from './SidebarToggle.vue'
import HeaderBreadcrumb from './HeaderBreadcrumb.vue'
import HeaderThemeToggle from './HeaderThemeToggle.vue'
import HeaderUserMenu from './HeaderUserMenu.vue'
</script>
