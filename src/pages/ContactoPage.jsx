import { useContactForm } from '../hooks/useContactForm';

const CHANNELS = [
  {
    href: 'https://wa.link/7z66ju',
    label: 'WhatsApp',
    value: '993 706 383',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#25D366">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.493 2.027 7.807L0 32l8.397-2.002A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.75-1.839l-.484-.287-5.01 1.194 1.228-4.874-.316-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.353-1.16-2.718-1.292-.365-.133-.63-.199-.896.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.957-.323-.775-.651-.67-.896-.682l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.283 6.797 6.006.95.41 1.691.655 2.269.839.953.303 1.821.26 2.507.158.765-.114 2.353-.962 2.685-1.89.332-.929.332-1.725.232-1.89-.099-.166-.364-.265-.763-.464z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/indubiker',
    label: 'Instagram',
    value: '@indubiker',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
        <defs>
          <linearGradient id="ig-contact" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/>
            <stop offset="50%" stopColor="#dc2743"/>
            <stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-contact)"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    href: 'https://www.tiktok.com/@indubiker',
    label: 'TikTok',
    value: '@indubiker',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="#000000">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
];

export default function ContactoPage() {
  const { fields, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contacto">
      {/* Info + canales */}
      <div className="contact-info reveal">
        <div className="section-tag">Hablemos</div>
        <h2 className="section-title">CONTACTO</h2>
        <p className="contact-text">
          ¿Quieres saber más sobre nuestros servicios o coordinar la limpieza de
          tu equipo? Contáctanos por el canal que prefieras.
        </p>
        <div className="contact-channels">
          {CHANNELS.map(c => (
            <a key={c.label} href={c.href} className="channel-item" target="_blank" rel="noreferrer">
              <span className="channel-icon">{c.icon}</span>
              <div>
                <div className="channel-label">{c.label}</div>
                <div className="channel-value">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="contact-form-side reveal">
        <div className="form-title">Envíanos un mensaje</div>
        <p className="form-sub">Te respondemos a la brevedad</p>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo"
            value={fields.nombre} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono / WhatsApp</label>
          <input id="telefono" name="telefono" type="tel" placeholder="+51 9XX XXX XXX"
            value={fields.telefono} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="servicio">Servicio de interés</label>
          <select id="servicio" name="servicio" value={fields.servicio} onChange={handleChange}>
            <option value="">Selecciona un servicio</option>
            <option>Lavado de Casco</option>
            <option>Lavado de Guantes</option>
            <option>Lavado de Botines</option>
            <option>Lavado de Casaca</option>
            <option>Lavado de Monotraje</option>
            <option>Combo completo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" placeholder="Coméntanos qué necesitas o realiza una consulta..."
            value={fields.mensaje} onChange={handleChange} />
        </div>

        <button className="form-submit" onClick={handleSubmit}>
          Enviar por WhatsApp 💬
        </button>
      </div>
    </section>
  );
}
