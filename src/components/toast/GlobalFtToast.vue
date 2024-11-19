<template>
  <Teleport to="body">
    <div
      class="p-toast p-component p-toast-top-right fixed z-[100]"
      v-if="open"
    >
      <div class="p-toast-message p-toast-message-warn px-5 py-3 text-sm">
        <div class="mb-2">{{ message }}</div>
        <ProgressBar
          v-if="progressConfig.showProgress"
          class="flex-1 mr-2"
          :show-value="false"
          aria-labelledby="label_status"
          :value="progressConfig?.progress"
          style="height: 30px"
        ></ProgressBar>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useFtToastStore } from '@/stores/ftToastStore'
import { ref, watch, reactive } from 'vue'
import ProgressBar from 'primevue/progressbar'

const message = ref('')
const open = ref()
const pconfig = {
  progress: 0,
  showProgress: false
}
const progressConfig = reactive({ ...pconfig })
const ftToastStore = useFtToastStore()

watch(
  () => ftToastStore.message,
  (newMessage) => {
    if (!newMessage) {
      return
    }

    message.value = newMessage
  },
  { deep: true }
)

watch(
  () => ftToastStore.progressOption,
  (options) => {
    Object.assign(progressConfig, options)
  },
  { deep: true }
)

watch(
  () => ftToastStore.open,
  (show) => {
    open.value = show
    if (!open.value) {
      clear()
    }
  },
  { deep: true }
)

const clear = () => {
  message.value = ''
  Object.assign(progressConfig, { ...pconfig })
}
</script>
