<!-- src/components/vue/ContactForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-group">
      <input type="text" v-model="form.name" placeholder="Nombre / Handle" required />
    </div>
    <div class="form-group">
      <input type="email" v-model="form.email" placeholder="Email / Netrunner ID" required />
    </div>
    <div class="form-group">
      <textarea v-model="form.message" placeholder="Tu mensaje cifrado..."></textarea>
    </div>
    <button type="submit" :disabled="sending" class="btn">
      {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';


const form = reactive({ name: '', email: '', message: '' });
const sending = ref(false);

const submitForm = () => {
  sending.value = true;
  setTimeout(() => {
    alert('¡Mensaje enviado! (Demo)');
    sending.value = false;
    form.name = '';
    form.email = '';
    form.message = '';
  }, 1000);
};
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1rem;
}
input, textarea {
  width: 100%;
  padding: 0.75rem;
  background: rgba(0,0,0,0.5);
  border: 1px solid var(--neon-cyan);
  color: var(--neon-cyan);
  font-family: var(--font-mono);
  transition: 0.3s;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--neon-pink);
  box-shadow: 0 0 10px var(--neon-pink);
}
textarea {
  min-height: 120px;
  resize: vertical;
}
</style>