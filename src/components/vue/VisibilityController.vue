<!-- src/components/vue/VisibilityController.vue -->
<template>
  <Transition name="offline-fade">
    <div v-if="system.hydrated && !system.online" class="offline-overlay">
      <span class="offline-message">// OFFLINE MODE //</span>
      <span class="offline-sub">(todo el contenido está inactivo)</span>
    </div>
  </Transition>
</template>

<script setup>
import { useSystemStore } from '../../stores/system';

const system = useSystemStore();
</script>

<style scoped>
.offline-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg, #06060f);
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

.offline-fade-enter-active,
.offline-fade-leave-active {
  transition: opacity 0.25s ease;
}
.offline-fade-enter-from,
.offline-fade-leave-to {
  opacity: 0;
}
</style>
