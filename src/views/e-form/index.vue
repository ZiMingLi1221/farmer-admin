<template>
  <div class="p-6">
    <n-space vertical :size="16">
      <n-page-header title="電子表單" subtitle="線上表單管理系統">
        <template #extra>
          <n-button type="primary" @click="showDrawer = true">
            <template #icon>
              <n-icon><AddOutline /></n-icon>
            </template>
            新增表單
          </n-button>
        </template>
      </n-page-header>

      <!-- 統計卡片 -->
      <n-grid :cols="4" :x-gap="16">
        <n-gi>
          <n-card>
            <n-statistic label="總表單數" value="128" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card>
            <n-statistic label="待審核" value="23" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card>
            <n-statistic label="已通過" value="95" />
          </n-card>
        </n-gi>
        <n-gi>
          <n-card>
            <n-statistic label="已拒絕" value="10" />
          </n-card>
        </n-gi>
      </n-grid>

      <!-- 表單列表 -->
      <n-card title="表單列表">
        <template #header-extra>
          <n-space>
            <n-input placeholder="搜尋表單..." style="width: 200px">
              <template #prefix>
                <n-icon><SearchOutline /></n-icon>
              </template>
            </n-input>
            <n-select 
              :options="statusOptions" 
              placeholder="狀態篩選"
              style="width: 120px"
            />
          </n-space>
        </template>
        <n-data-table
          :columns="columns"
          :data="formList"
          :pagination="{ pageSize: 10 }"
        />
      </n-card>
    </n-space>

    <!-- 新增表單抽屜 -->
    <n-drawer v-model:show="showDrawer" :width="600">
      <n-drawer-content title="新增表單">
        <n-form :model="newForm">
          <n-form-item label="表單標題">
            <n-input v-model:value="newForm.title" />
          </n-form-item>
          <n-form-item label="表單類型">
            <n-select v-model:value="newForm.type" :options="typeOptions" />
          </n-form-item>
          <n-form-item label="描述">
            <n-input v-model:value="newForm.description" type="textarea" :rows="4" />
          </n-form-item>
        </n-form>
        <template #footer>
          <n-space justify="end">
            <n-button @click="showDrawer = false">取消</n-button>
            <n-button type="primary" @click="handleCreateForm">建立</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { NButton, NTag, NSpace, useMessage } from 'naive-ui'
import { AddOutline, SearchOutline } from '@vicons/ionicons5'

const message = useMessage()
const showDrawer = ref(false)

const statusOptions = [
  { label: '全部', value: 'all' },
  { label: '待審核', value: 'pending' },
  { label: '已通過', value: 'approved' },
  { label: '已拒絕', value: 'rejected' }
]

const typeOptions = [
  { label: '請假申請', value: 'leave' },
  { label: '報銷申請', value: 'expense' },
  { label: '採購申請', value: 'purchase' }
]

const newForm = ref({
  title: '',
  type: null,
  description: ''
})

const formList = ref([
  { id: 1, title: '請假申請表', type: '請假申請', status: 'pending', submitter: '張三', submitTime: '2025-10-04 10:00' },
  { id: 2, title: '差旅報銷', type: '報銷申請', status: 'approved', submitter: '李四', submitTime: '2025-10-03 14:30' },
  { id: 3, title: '辦公用品採購', type: '採購申請', status: 'rejected', submitter: '王五', submitTime: '2025-10-02 09:15' }
])

const columns = [
  { title: 'ID', key: 'id', width: 80 },
  { title: '表單標題', key: 'title' },
  { title: '類型', key: 'type', width: 120 },
  {
    title: '狀態',
    key: 'status',
    width: 100,
    render: (row: any) => {
      const typeMap: any = {
        pending: 'warning',
        approved: 'success',
        rejected: 'error'
      }
      const labelMap: any = {
        pending: '待審核',
        approved: '已通過',
        rejected: '已拒絕'
      }
      return h(NTag, { type: typeMap[row.status] }, { default: () => labelMap[row.status] })
    }
  },
  { title: '提交人', key: 'submitter', width: 100 },
  { title: '提交時間', key: 'submitTime', width: 160 },
  {
    title: '操作',
    key: 'actions',
    width: 150,
    render: () => h(NSpace, null, {
      default: () => [
        h(NButton, { size: 'small' }, { default: () => '查看' }),
        h(NButton, { size: 'small', type: 'primary' }, { default: () => '審核' })
      ]
    })
  }
]

const handleCreateForm = () => {
  message.success('表單建立成功')
  showDrawer.value = false
  newForm.value = { title: '', type: null, description: '' }
}
</script>
