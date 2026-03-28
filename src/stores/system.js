// src/stores/system.js
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    online: localStorage.getItem('system_online') === 'true' // recupera valor guardado
  }),
  getters: {
    animationsEnabled: (state) => state.online // si online true, animaciones true
  },
  actions: {
    toggle() {
      this.online = !this.online
      localStorage.setItem('system_online', this.online) // guarda valor en localStorage
    }
  }
})