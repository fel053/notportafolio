<!-- src/components/vue/AnimatedSection.vue -->
<template>
    <section ref="section" class="anim-section">
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

onMounted(() => {
    if (!system.online) {
        // Offline: mostrar contenido directamente sin animación
        gsap.set(section.value, { opacity: 1, y: 0, skewX: 0 });
        return;
    }

    // Online: aplicar animación
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
        }
    );
});
</script>
