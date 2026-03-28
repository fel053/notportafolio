<!-- src/components/vue/VisibilityController.vue -->
<template>
  <div v-if="system.online" class="page-content">
    <slot />
  </div>
  <div v-else class="offline-placeholder">
    <span class="offline-message">// OFFLINE MODE //</span>
    <span class="offline-sub">(todo el contenido está inactivo)</span>
  </div>
</template>

<script setup>
import { useSystemStore } from '../../stores/system';

const system = useSystemStore();
</script>

<style scoped>
.page-content {
  min-height: calc(100vh - 150px);
}

.offline-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  text-align: center;
  font-family: var(--font-mono);
  gap: 1rem;
}

.offline-message {
  font-size: 2rem;
  color: var(--neon-cyan);
  text-shadow: 0 0 10px var(--neon-cyan);
  letter-spacing: 4px;
}

.offline-sub {
  font-size: 0.8rem;
  color: rgba(0, 229, 255, 0.5);
}
</style>