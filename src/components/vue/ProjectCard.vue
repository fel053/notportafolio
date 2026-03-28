<!-- src/components/vue/ProjectCard.vue -->
<template>
  <article
    ref="cardRef"
    class="project-card"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <!-- scan effect overlay -->
    <div ref="scanRef" class="card-scan"></div>

    <!-- top bar -->
    <div class="card-topbar">
      <span class="card-num">{{ project.number }}</span>
      <span class="card-topbar-line"></span>
      <span class="card-icon">◆</span>
    </div>

    <!-- name -->
    <h3 ref="nameRef" class="card-name">{{ project.name }}</h3>

    <!-- text -->
    <div class="card-text">
      <p v-for="(para, i) in project.paragraphs" :key="i">{{ para }}</p>
    </div>

    <!-- bottom accent -->
    <div ref="accentRef" class="card-accent"></div>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';


defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const cardRef   = ref(null);
const nameRef   = ref(null);
const scanRef   = ref(null);
const accentRef = ref(null);

const onEnter = () => {
  gsap.to(cardRef.value, {
    borderColor: 'rgba(0,229,255,.65)',
    boxShadow: '0 0 20px rgba(0,229,255,.3), 0 0 60px rgba(0,229,255,.08), inset 0 0 20px rgba(0,229,255,.04)',
    duration: 0.35,
    ease: 'power2.out',
  });
  gsap.to(nameRef.value, {
    color: 'var(--cyan)',
    textShadow: '0 0 20px rgba(0,229,255,.5)',
    duration: 0.35,
  });
  gsap.fromTo(
    scanRef.value,
    { top: '-30%', opacity: 1 },
    { top: '120%', opacity: 0.6, duration: 0.65, ease: 'none' }
  );
  gsap.to(accentRef.value, {
    width: '100%',
    duration: 0.4,
    ease: 'power2.out',
  });
};

const onLeave = () => {
  gsap.to(cardRef.value, {
    borderColor: 'rgba(0,229,255,.18)',
    boxShadow: '0 0 8px rgba(0,229,255,.1), inset 0 0 8px rgba(0,229,255,.02)',
    duration: 0.4,
    ease: 'power2.out',
  });
  gsap.to(nameRef.value, {
    color: 'var(--fg)',
    textShadow: 'none',
    duration: 0.4,
  });
  gsap.to(accentRef.value, {
    width: '0%',
    duration: 0.3,
    ease: 'power2.in',
  });
};
</script>

<style scoped>
.project-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid rgba(0,229,255,.18);
  box-shadow: 0 0 8px rgba(0,229,255,.1), inset 0 0 8px rgba(0,229,255,.02);
  padding: 1.8rem;
  overflow: hidden;
  cursor: default;
  transition: none;
}

/* top-right corner accent (static) */
.project-card::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 14px; height: 14px;
  border-top: 1px solid rgba(0,229,255,.5);
  border-right: 1px solid rgba(0,229,255,.5);
}

/* scan sweep */
.card-scan {
  position: absolute;
  top: -30%; left: 0;
  width: 100%; height: 30%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0,229,255,.06),
    transparent
  );
  pointer-events: none;
  opacity: 0;
}

.card-topbar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.4rem;
}

.card-num {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  color: var(--cyan);
}

.card-topbar-line {
  flex: 1;
  height: 1px;
  background: rgba(0,229,255,.2);
}

.card-icon {
  font-size: 0.45rem;
  color: rgba(0,229,255,.4);
}

.card-name {
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.8vw, 1.8rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--fg);
  margin-bottom: 1.2rem;
  transition: color 0.35s, text-shadow 0.35s;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.card-text p {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--fg-2);
  line-height: 1.7;
}

.card-text p:last-child {
  font-style: italic;
  color: rgba(104,120,160,.7);
}

/* bottom neon accent bar */
.card-accent {
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, var(--cyan), var(--pink));
  box-shadow: var(--glow-c);
}
</style>
