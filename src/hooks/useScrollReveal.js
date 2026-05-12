import { useEffect } from 'react';

/**
 * useScrollReveal
 * Observa todos los elementos .reveal y les agrega .visible al entrar en viewport.
 * Llámalo una sola vez en App.jsx.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
