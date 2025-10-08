<template>
  <n-dropdown :options="userDropdownOptions" @select="handleUserSelect">
    <n-button quaternary circle size="medium">
      <template #icon>
        <n-icon size="20"><PersonOutline /></n-icon>
      </template>
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon, NAvatar, NText } from 'naive-ui'
import {
  PersonOutline,
  SettingsOutline,
  LogOutOutline,
  PersonCircleOutline
} from '@vicons/ionicons5'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const userName = computed(() => userStore.name || '訪客')
const userRole = computed(() => userStore.role || '使用者')
const userEmail = computed(() => userStore.email || 'user@example.com')

const userDropdownOptions = computed(() => [
  // 用戶資訊卡片（頭部）
  {
    key: 'user-info',
    type: 'render',
    render: () => h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 16px',
          borderBottom: '1px solid var(--n-divider-color)'
        }
      },
      [
        // 頭像
        h(NAvatar, {
          round: true,
          size: 64,
          style: { marginBottom: '12px' }
        }, {
          default: () => h(NIcon, { size: 40 }, { default: () => h(PersonCircleOutline) })
        }),
        
        // 用戶名
        h(NText, {
          style: {
            fontWeight: 600,
            fontSize: '16px',
            marginBottom: '4px'
          }
        }, { default: () => userName.value }),
        
        // 郵箱
        h(NText, {
          depth: 3,
          style: {
            fontSize: '13px',
            marginBottom: '4px'
          }
        }, { default: () => userEmail.value }),
        
        // 角色（新增）
        h(NText, {
          depth: 3,
          style: {
            fontSize: '12px'
          }
        }, { default: () => userRole.value })
      ]
    )
  },
  
  // 選項區域
  {
    key: 'profile',
    label: '個人中心',
    icon: () => h(NIcon, null, { default: () => h(PersonOutline) })
  },
  {
    key: 'preferences',
    label: '偏好設定',
    icon: () => h(NIcon, null, { default: () => h(SettingsOutline) })
  },
  
  // 分隔線
  {
    type: 'divider',
    key: 'divider'
  },
  
  // 登出
  {
    key: 'logout',
    label: '登出',
    icon: () => h(NIcon, null, { default: () => h(LogOutOutline) })
  }
])

const handleUserSelect = (key: string) => {
  switch (key) {
    case 'profile':
      router.push('/profile')
      break
    case 'preferences':
      // 打開偏好設定
      break
    case 'logout':
      userStore.logout()
      router.push('/sign-in')
      break
  }
}
</script>
