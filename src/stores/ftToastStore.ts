// Within Vue component context, you can directly call useToast().add()
// instead of going through the store.
// The store is useful when you need to call it from outside the Vue component context.
import { defineStore } from 'pinia'

type IFtToast = {
  message: string
  progressOption?: {
    showProgress: boolean
    progress: number
    label?: string
  }
}

export const useFtToastStore = defineStore('ftToast', {
  state: () => ({
    open: false,
    message: '',
    progressOption: {
      showProgress: false,
      progress: 0
    }
  }),

  actions: {
    add(message: string) {
      this.message = message
      this.open = true
    },
    refresh({ message, progressOption }: IFtToast) {
      if (!this.open) this.open = true
      this.message = message
      if (progressOption) {
        this.progressOption = progressOption
      }
    },
    remove() {
      this.open = false
      this.message = ''
      this.progressOption = {
        showProgress: false,
        progress: 0
      }
    }
  }
})
