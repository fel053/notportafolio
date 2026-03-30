<!-- src/components/vue/AnimatedSection.vue -->
<template>
    <section ref="section" :class="['anim-section', { 'is-visible': visible }]">
        <slot></slot>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSystemStore } from '../../stores/system';

gsap.registerPlugin(ScrollTrigger);

const section = ref(null);
const system = useSystemStore();
const visible = ref(false);

onMounted(() => {
    if (!system.hydrated) {
        system.init();
    }

    if (!system.online) {
        gsap.set(section.value, { opacity: 1, y: 0, skewX: 0 });
        visible.value = true;
        return;
    }

    gsap.set(section.value, { opacity: 0, y: 40, skewX: -0.8 });
    gsap.fromTo(
        section.value,
        { opacity: 0, y: 40, skewX: -0.8 },
        {
            opacity: 1,
            y: 0,
            skewX: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section.value,
                start: 'top 83%',
                toggleActions: 'play none none reverse'
            },
            onStart: () => {
                visible.value = true;
            }
        }
    );
});
</script>

<style scoped>
.anim-section {
  opacity: 0;
  transform: translateY(40px) skewX(-0.8deg);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.anim-section.is-visible {
  opacity: 1;
  transform: translateY(0) skewX(0);
}
</style>
