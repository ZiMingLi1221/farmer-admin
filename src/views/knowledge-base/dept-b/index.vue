<template>
  <div class="p-6">
    <n-space vertical :size="16">
      <n-page-header title="部門B" subtitle="法規業務知識庫">
        <template #extra>
          <n-button type="primary">
            <template #icon>
              <n-icon><AddOutline /></n-icon>
            </template>
            新增文件
          </n-button>
        </template>
      </n-page-header>

      <n-card>
        <n-empty description="部門B知識庫內容待建置">
          <template #icon>
            <n-icon size="48"><DocumentTextOutline /></n-icon>
          </template>
          <template #extra>
            <n-button type="primary">立即建置</n-button>
          </template>
        </n-empty>
      </n-card>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { AddOutline, DocumentTextOutline } from '@vicons/ionicons5'
</script>
