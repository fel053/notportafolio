import gsap from 'gsap';

export const randomGlitch = (element) => {
  gsap.to(element, {
    duration: 0.05,
    repeat: 3,
    x: () => Math.random() * 5 - 2.5,
    y: () => Math.random() * 5 - 2.5,
    onComplete: () => gsap.set(element, { x: 0, y: 0 })
  });
};