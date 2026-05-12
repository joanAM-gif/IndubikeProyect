import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#servicios',   label: 'Servicios' },
  { href: '#galeria',     label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#nosotros',    label: 'Nosotros' },
  { href: '#ubicanos',    label: 'Ubícanos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al hacer scroll o resize
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, []);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav>
        <a href="#inicio" className="nav-logo"><span>Indu</span>Biker</a>

        {/* Links desktop */}
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li><a href="#contacto" className="nav-cta">Contactar</a></li>
        </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className={`hamburger${open ? ' hamburger--open' : ''}`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Overlay oscuro */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Drawer móvil */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}>
        <ul>
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={handleLinkClick}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="mobile-cta" onClick={handleLinkClick}>
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}