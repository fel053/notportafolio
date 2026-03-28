<!-- src/components/vue/HeroSection.vue -->
<template>
  <section class="hero">
    <!-- ambient glows -->
    <div class="hero-glow hero-glow-cyan"></div>
    <div class="hero-glow hero-glow-pink"></div>

    <!-- HUD corners -->
    <div class="hud-corner hud-tl">
      <span class="hc-h"></span><span class="hc-v"></span>
    </div>
    <div class="hud-corner hud-tr">
      <span class="hc-h"></span><span class="hc-v"></span>
    </div>
    <div class="hud-corner hud-bl">
      <span class="hc-h"></span><span class="hc-v"></span>
    </div>
    <div class="hud-corner hud-br">
      <span class="hc-h"></span><span class="hc-v"></span>
    </div>

    <!-- ghost number -->
    <span class="hero-ghost">00</span>

    <div class="hero-inner">
      <!-- system label -->
      <div ref="sysRef" class="hero-sys">
        <span class="sys-bracket">[</span>
        <span class="sys-text">SYS.000 / ENTRY_POINT</span>
        <span class="sys-bracket">]</span>
        <span class="sys-cursor">_</span>
      </div>

      <!-- main heading -->
      <h1
        ref="headingRef"
        class="hero-heading glitch"
        data-text="ESTO NO ES UN PORTAFOLIO."
      >
        ESTO NO ES<br />UN PORTAFOLIO.
      </h1>

      <!-- sub -->
      <p ref="subRef" class="hero-sub">
        <span class="sub-arrow">&gt;&nbsp;</span>O al menos eso intento.
      </p>

      <!-- note -->
      <p ref="noteRef" class="hero-note">
        Si estabas buscando algo estándar,<br />
        todavía puedes cerrar la pestaña.
      </p>

      <!-- CTA -->
      <div ref="ctaRef" class="hero-cta-wrap">
        <a href="#apertura" class="btn-neon hero-cta">
          <span class="cta-bracket">[</span>
          <span>ENTRAR IGUAL</span>
          <span class="cta-bracket">]</span>
          <span class="cta-arrow">↓</span>
        </a>
        <span class="hero-cta-note">// scroll_enabled</span>
      </div>
    </div>

    <!-- bottom scan bar -->
    <div class="hero-scanbar"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useSystemStore } from '../../stores/system';

const system = useSystemStore();

const sysRef     = ref(null);
const headingRef = ref(null);
const subRef     = ref(null);
const noteRef    = ref(null);
const ctaRef     = ref(null);

onMounted(() => {
  if (!system.online) {
    // Si el sistema está offline, muestra todo sin animaciones
    gsap.set(
      [sysRef.value, headingRef.value, subRef.value, noteRef.value, ctaRef.value],
      { opacity: 1, y: 0 }
    );
    return;
  }

  gsap.set(
    [sysRef.value, headingRef.value, subRef.value, noteRef.value, ctaRef.value],
    { opacity: 0, y: 20 }
  );

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.to(sysRef.value,     { opacity: 1, y: 0, duration: 0.5 }, 0.3)
    .to(headingRef.value, { opacity: 1, y: 0, duration: 1.0 }, 0.7)
    .to(subRef.value,     { opacity: 1, y: 0, duration: 0.7 }, 1.5)
    .to(noteRef.value,    { opacity: 1, y: 0, duration: 0.7 }, 2.0)
    .to(ctaRef.value,     { opacity: 1, y: 0, duration: 0.6 }, 2.7);
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 var(--pad-x);
  background:
    radial-gradient(ellipse at 75% 25%, rgba(255,32,120,.06) 0%, transparent 55%),
    radial-gradient(ellipse at 20% 80%, rgba(0,229,255,.06) 0%, transparent 55%);
}

/* ambient glow discs */
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-glow-cyan {
  width: 500px; height: 300px;
  top: -80px; right: -100px;
  background: rgba(0,229,255,.06);
}
.hero-glow-pink {
  width: 400px; height: 400px;
  bottom: -100px; left: -80px;
  background: rgba(255,32,120,.05);
}

/* ghost large number */
.hero-ghost {
  position: absolute;
  right: calc(var(--pad-x) - 1rem);
  bottom: 5%;
  font-family: var(--font-display);
  font-size: clamp(12rem, 28vw, 24rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0,229,255,.01);
  text-shadow: 
    1px 1px 0 rgba(255,32,120,.01),
    -1px -1px 0 rgba(0,229,255,.01);
  user-select: none;
  pointer-events: none;
  line-height: 1;
  z-index: 0;
}

/* HUD corners */
.hud-corner {
  position: absolute;
  width: 28px; height: 28px;
  z-index: 3;
  pointer-events: none;
}
.hud-tl { top: 2rem;    left: calc(var(--pad-x) - 0.5rem); }
.hud-tr { top: 2rem;    right: calc(var(--pad-x) - 0.5rem); }
.hud-bl { bottom: 2rem; left: calc(var(--pad-x) - 0.5rem); }
.hud-br { bottom: 2rem; right: calc(var(--pad-x) - 0.5rem); }

.hc-h, .hc-v {
  position: absolute;
  background: rgba(0,229,255,.45);
}
.hc-h { width: 100%; height: 1px; top: 0; }
.hc-v { width: 1px; height: 100%; left: 0; }
.hud-tr .hc-v { left: auto; right: 0; }
.hud-bl .hc-h { top: auto; bottom: 0; }
.hud-br .hc-h { top: auto; bottom: 0; }
.hud-br .hc-v { left: auto; right: 0; }

/* hero inner */
.hero-inner {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding-top: 4rem;
  position: relative;
  z-index: 5;
}

/* system label */
.hero-sys {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(0,229,255,.5);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.sys-text { color: rgba(0,229,255,.6); }
.sys-cursor {
  color: var(--cyan);
  animation: blink 1.1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

/* heading */
.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 7.5vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.03em;
  color: var(--fg);
  margin-bottom: 2.5rem;
  text-shadow: 0 0 40px rgba(0,229,255,.1);
}

/* sub */
.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  font-weight: 300;
  font-style: italic;
  color: var(--fg-2);
  margin-bottom: 1.8rem;
  display: flex;
  align-items: baseline;
  gap: 0;
}
.sub-arrow {
  color: var(--pink);
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 0.9em;
}

/* note */
.hero-note {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 300;
  color: rgba(104, 120, 160, .6);
  line-height: 2;
  margin-bottom: 4rem;
}

/* cta */
.hero-cta-wrap {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hero-cta {
  font-size: 0.72rem;
}
.cta-bracket {
  color: rgba(0,229,255,.5);
}
.cta-arrow {
  font-size: 0.85rem;
  transition: transform 0.4s;
}
.hero-cta:hover .cta-arrow {
  transform: translateY(4px);
}

.hero-cta-note {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  color: rgba(0,229,255,.2);
}

/* bottom bar */
.hero-scanbar {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    transparent,
    rgba(0,229,255,.5) 20%,
    rgba(255,32,120,.4) 50%,
    rgba(0,229,255,.5) 80%,
    transparent
  );
  box-shadow: 0 0 12px rgba(0,229,255,.3);
}
</style>
