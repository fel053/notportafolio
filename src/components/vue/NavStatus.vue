<script setup>
import { useSystemStore } from '../../stores/system';

const system = useSystemStore()
</script>

<template>

  <span 
    class="nav-status"
    :class="{ offline: !system.online }"
    @click="system.toggle()"
  >
    ● {{ system.online ? 'ONLINE' : 'OFFLINE' }}
  </span>

</template>

<style>
.nav-status {
  cursor: pointer;
}
</style>