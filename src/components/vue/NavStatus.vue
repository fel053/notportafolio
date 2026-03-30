<script setup>
import { useSystemStore } from '../../stores/system';

const system = useSystemStore();

const onToggle = () => system.toggle();
</script>

<template>
  <span
    class="nav-status"
    :class="{ offline: system.hydrated && !system.online }"
    @click="onToggle"
  >
    ● 
    <template v-if="!system.hydrated">CARGANDO...</template>
    <template v-else>{{ system.online ? 'ONLINE' : 'OFFLINE' }}</template>
  </span>
</template>

<style>
.nav-status {
  cursor: pointer;
}
</style>