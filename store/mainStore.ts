import { defineStore } from "pinia"

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        menuItemActive: 0
    }),
    actions: {
        changeMenuItemActive( itemId: number ){
            this.menuItemActive = itemId
        }
    }
})
