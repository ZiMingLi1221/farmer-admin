<template>
  <n-card title="與AI對話" :segmented="{ content: true, footer: 'soft' }">
    <template #header-extra>
      <n-button @click="handleNewChat" secondary>
        <template #icon>
          <n-icon><RefreshOutline /></n-icon>
        </template>
        新對話
      </n-button>
    </template>

    <!-- 對話區域 -->
    <n-scrollbar style="max-height: calc(100vh - 350px)">
      <!-- 空狀態 -->
      <n-empty
        v-if="messages.length === 0"
        description="開始與 AI 對話"
        size="large"
        style="padding: 60px 0"
      >
        <template #icon>
          <n-icon size="50" color="#18a058">
            <ChatbubbleEllipsesOutline />
          </n-icon>
        </template>
      </n-empty>

      <!-- 訊息列表 -->
      <n-list v-else>
        <n-list-item v-for="msg in messages" :key="msg.id">
          <n-thing :title="msg.role === 'user' ? '您' : 'AI 助手'">
            <template #avatar>
              <n-avatar v-if="msg.role === 'user'" round>
                <n-icon><PersonOutline /></n-icon>
              </n-avatar>
              <n-avatar v-else round color="#18a058">
                <n-icon><SparklesOutline /></n-icon>
              </n-avatar>
            </template>

            <template #header-extra>
              <n-text depth="3" style="font-size: 12px">{{ msg.time }}</n-text>
            </template>

            <n-text>{{ msg.content }}</n-text>
          </n-thing>
        </n-list-item>

        <!-- 載入中 -->
        <n-list-item v-if="loading">
          <n-thing title="AI 助手">
            <template #avatar>
              <n-avatar round color="#18a058">
                <n-icon><SparklesOutline /></n-icon>
              </n-avatar>
            </template>
            <n-spin size="small" />
          </n-thing>
        </n-list-item>
      </n-list>
    </n-scrollbar>

    <!-- 輸入區域 -->
    <template #footer>
      <n-space vertical>
        <n-input
          v-model:value="inputMessage"
          type="textarea"
          placeholder="輸入您的問題... (Enter 發送)"
          :autosize="{ minRows: 2, maxRows: 5 }"
          :disabled="loading"
          @keydown.enter.exact.prevent="handleSend"
        />
        <n-space justify="end">
          <n-button @click="inputMessage = ''" :disabled="!inputMessage">
            清空
          </n-button>
          <n-button
            type="primary"
            :loading="loading"
            :disabled="!inputMessage.trim()"
            @click="handleSend"
          >
            <template #icon>
              <n-icon><SendOutline /></n-icon>
            </template>
            發送
          </n-button>
        </n-space>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  SendOutline,
  ChatbubbleEllipsesOutline,
  PersonOutline,
  SparklesOutline,
  RefreshOutline
} from '@vicons/ionicons5'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
  time: string
}

const messages = ref<Message[]>([])
const inputMessage = ref('')
const loading = ref(false)

// 發送訊息
const handleSend = async () => {
  if (!inputMessage.value.trim() || loading.value) return

  const userMsg: Message = {
    id: Date.now(),
    role: 'user',
    content: inputMessage.value.trim(),
    time: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })
  }

  messages.value.push(userMsg)
  const question = inputMessage.value
  inputMessage.value = ''
  loading.value = true

  // 模擬 AI 回覆
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      role: 'assistant',
      content: `收到您的問題：「${question}」。這是一個演示回覆，實際應用中會接入 AI 模型來提供準確的答案。`,
      time: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })
    })
    loading.value = false
  }, 1500)
}

// 新對話
const handleNewChat = () => {
  messages.value = []
  inputMessage.value = ''
}
</script>
