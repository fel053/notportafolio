// src/stores/system.js
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state: () => {
    if (typeof window !== 'undefined') {
      return {
        online: localStorage.getItem('system_online') !== 'false',
        hydrated: true
      };
    }
    return { online: true, hydrated: false };
  },
  actions: {
    init() {
      if (typeof window !== 'undefined' && !this.hydrated) {
        this.online = localStorage.getItem('system_online') !== 'false';
        this.hydrated = true;
      }
    },
    toggle() {
      if (!this.hydrated) this.init();
      this.online = !this.online;
      if (typeof window !== 'undefined') {
        localStorage.setItem('system_online', this.online);
      }
    }
  }
});