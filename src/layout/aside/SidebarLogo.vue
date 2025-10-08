<template>
  <div :style="{
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0,
    padding: '0 16px'
  }">
    <router-link to="/" :style="{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: 'inherit',
      textDecoration: 'none'
    }">
      <!-- SVG Logo -->
      <img 
        src="@/assets/national_farmers_logo.svg" 
        alt="Farmer Admin" 
        :style="{ 
          width: '32px', 
          height: '32px', 
          flexShrink: 0 
        }"
      />
      
      <!-- 標題文字 - 收縮時隱藏 -->
      <span 
        v-show="!collapsed" 
        :style="{ 
          fontSize: '18px', 
          fontWeight: 600, 
          whiteSpace: 'nowrap' 
        }"
      >
        Farmer Admin
      </span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  collapsed: boolean
}>()
</script>
