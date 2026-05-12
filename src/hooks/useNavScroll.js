import { useEffect } from 'react';

/**
 * useNavScroll
 * Resalta el enlace de la navbar que corresponde a la sección visible.
 */
export function useNavScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const onScroll = () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });

      navLinks.forEach(link => {
        link.style.color =
          link.getAttribute('href') === '#' + current ? 'var(--orange)' : '';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
