<template>
  <n-menu
    :options="menuOptions"
    :value="activeKey"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    @update:value="handleMenuSelect"
  />
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { Component } from 'vue'
import { NIcon, type MenuOption } from 'naive-ui'
import {
  ChatbubbleEllipsesOutline,
  LibraryOutline,
  DocumentTextOutline
} from '@vicons/ionicons5'

defineProps<{
  inverted: boolean
  collapsed: boolean
}>()

const router = useRouter()
const route = useRoute()

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '與AI對話',
    key: '/chat',
    icon: renderIcon(ChatbubbleEllipsesOutline)
  },
  {
    label: '法規業務知識庫',
    key: 'knowledge',
    icon: renderIcon(LibraryOutline),
    children: [
      {
        type: 'group',
        label: '依部門',
        key: 'dept',
        children: [
          { label: '部門A', key: '/dept-a' },
          { label: '部門B', key: '/dept-b' },
          { label: '部門C', key: '/dept-c' }
        ]
      }
    ]
  },
  {
    label: '電子表單',
    key: '/e-form',
    icon: renderIcon(DocumentTextOutline)
  }
]

const activeKey = computed(() => route.path)

const handleMenuSelect = (key: string) => {
  if (key.startsWith('/')) {
    router.push(key)
  }
}
</script>
