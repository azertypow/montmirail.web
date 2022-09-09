import {defineStore} from "pinia"


export const useGlobalState = defineStore('globalState', {
  state() {
    return {
      isOpen: false,
      galleryScrollPosition: 0,
      viewIDActive: "",
    }
  }
})
