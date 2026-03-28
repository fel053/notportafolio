// src/stores/system.js
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state: () => ({
    // Solo accede a localStorage si estamos en el navegador
    online: typeof window !== 'undefined' && localStorage.getItem('system_online') === 'true'
  }),
  actions: {
    toggle() {
      this.online = !this.online;
      if (typeof window !== 'undefined') {
        localStorage.setItem('system_online', this.online);
      }
    }
  }
});