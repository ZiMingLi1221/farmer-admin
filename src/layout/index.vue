<template>
  <n-layout position="absolute" has-sider>
    <!-- 左側邊欄 -->
    <AsideLayout />

    <!-- 右側內容區 -->
    <n-layout>
      <!-- Header -->
      <HeaderLayout />

      <!-- Tabs -->
      <TabsLayout />

      <!-- Main Content -->
      <MainLayout />

      <!-- Footer -->
      <FooterLayout />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import AsideLayout from './aside/index.vue'
import HeaderLayout from './header/index.vue'
import TabsLayout from './tabs/index.vue'
import MainLayout from './main/index.vue'
import FooterLayout from './footer/index.vue'
</script>
