import {defineStore} from "pinia"


export const useGlobalState = defineStore('globalState', {
  state() {
    return {
      isOpen: false,
      scrollPercent: 0,
      viewIDActive: "",
    }
  }
})
