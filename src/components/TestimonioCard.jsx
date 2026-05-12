/**
 * TestimonioCard
 * Props:
 *   initials  — letras del avatar (ej: "MR")
 *   name      — nombre del autor
 *   role      — descripción del rol (ej: "Motociclista urbano")
 *   text      — texto del testimonio
 *   stars     — número de estrellas (default: 5)
 */
export default function TestimonioCard({ initials, name, role, text, stars = 5 }) {
  return (
    <div className="testimonio-card reveal">
      <span className="quote-mark">"</span>
      <div className="stars">{'★'.repeat(stars)}</div>
      <p className="testimonio-text">{text}</p>
      <div className="testimonio-author">
        <div className="author-avatar">{initials}</div>
        <div>
          <div className="author-name">{name}</div>
          <div className="author-sub">{role}</div>
        </div>
      </div>
    </div>
  );
}
