<template>
  <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
    <n-dropdown :options="dropdownOptions" @select="handleSelect">
      <div style="display: flex; align-items: center; gap: 12px; cursor: pointer; padding: 8px; border-radius: 8px; transition: background 0.3s;" class="hover:bg-white hover:bg-opacity-10">
        <n-avatar round :size="32" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 14px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            {{ userName }}
          </div>
          <div style="font-size: 12px; opacity: 0.7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            {{ userRole }}
          </div>
        </div>
      </div>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { PersonOutline, SettingsOutline, LogOutOutline } from '@vicons/ionicons5'
import { useUserStore } from '@/stores/user'

defineProps<{
  inverted: boolean
}>()

const router = useRouter()
const userStore = useUserStore()

const userName = computed(() => userStore.name || '訪客')
const userRole = computed(() => userStore.role || '使用者')

const dropdownOptions = [
  {
    label: '個人中心',
    key: 'profile',
    icon: () => h(NIcon, null, { default: () => h(PersonOutline) })
  },
  {
    label: '偏好設定',
    key: 'preferences',
    icon: () => h(NIcon, null, { default: () => h(SettingsOutline) })
  },
  { type: 'divider', key: 'd1' },
  {
    label: '登出',
    key: 'logout',
    icon: () => h(NIcon, null, { default: () => h(LogOutOutline) })
  }
]

const handleSelect = (key: string) => {
  switch (key) {
    case 'profile':
      router.push('/profile')
      break
    case 'logout':
      userStore.logout()
      router.push('/sign-in')
      break
  }
}
</script>
