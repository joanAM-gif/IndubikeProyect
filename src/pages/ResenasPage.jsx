import { useState } from 'react';
import { useResenas } from '../hooks/useResenas';

/* ── Estrellas interactivas ── */
function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-picker">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          className={`star-btn${n <= (hovered || value) ? ' star-btn--on' : ''}`}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(n)}
          aria-label={`${n} estrella${n > 1 ? 's' : ''}`}
        >★</button>
      ))}
    </div>
  );
}

/* ── Tarjeta de reseña ── */
function ResenaCard({ nombre, estrellas, comentario, created_at }) {
  const fecha = new Date(created_at).toLocaleDateString('es-PE', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
  const iniciales = nombre.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className="resena-card">
      <span className="quote-mark">"</span>
      <div className="stars">{'★'.repeat(estrellas)}{'☆'.repeat(5 - estrellas)}</div>
      <p className="testimonio-text">"{comentario}"</p>
      <div className="testimonio-author">
        <div className="author-avatar">{iniciales}</div>
        <div>
          <div className="author-name">{nombre}</div>
          <div className="author-sub">{fecha}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Página principal ── */
export default function ResenasPage() {
  const {
    user, resenas, loading, enviando, error, exito,
    loginGoogle, logout, enviarResena,
  } = useResenas();

  const [celular,    setCelular]    = useState('');
  const [estrellas,  setEstrellas]  = useState(5);
  const [comentario, setComentario] = useState('');

  const handleEnviar = async () => {
    await enviarResena({ celular, estrellas, comentario });
    if (!error) {
      setCelular('');
      setComentario('');
      setEstrellas(5);
    }
  };

  return (
    <section id="resenas">

      {/* ── Encabezado ── */}
      <div className="resenas-header reveal">
        <div className="section-tag">Opiniones reales</div>
        <h2 className="section-title">LO QUE DICEN<br />NUESTROS CLIENTES</h2>
        <p className="resenas-sub">
          Inicia sesión con tu cuenta de Google y déjanos tu experiencia.
          Tu opinión ayuda a otros motociclistas a confiar en nosotros.
        </p>
      </div>

      {/* ── Formulario / Login ── */}
      <div className="resenas-body reveal">

        <div className="resena-form-wrap">

          {!user ? (
            /* Estado: no logueado */
            <div className="resena-login-box">
              <div className="resena-login-icon">🔒</div>
              <h3>Deja tu reseña</h3>
              <p>Inicia sesión con Google para compartir tu experiencia con InduBiker.</p>
              <button className="btn-google" onClick={loginGoogle}>
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                Continuar con Google
              </button>
            </div>

          ) : exito ? (
            /* Estado: reseña enviada */
            <div className="resena-exito">
              <div className="resena-exito-icon">✅</div>
              <h3>¡Gracias por tu reseña!</h3>
              <p>La revisaremos y la publicaremos pronto. Tu opinión es muy valiosa para nosotros.</p>
              <button className="btn-primary" onClick={logout} style={{ marginTop: '1rem' }}>
                Cerrar sesión
              </button>
            </div>

          ) : (
            /* Estado: formulario */
            <div className="resena-form">
              {/* Info del usuario */}
              <div className="resena-user-info">
                <img
                  src={user.user_metadata?.avatar_url ?? ''}
                  alt={user.user_metadata?.full_name}
                  className="resena-avatar"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="resena-user-name">{user.user_metadata?.full_name}</div>
                  <div className="resena-user-email">{user.email}</div>
                </div>
                <button className="btn-logout" onClick={logout} title="Cerrar sesión">✕</button>
              </div>

              {/* Celular */}
              <div className="form-group">
                <label htmlFor="r-celular">Número de celular</label>
                <input
                  id="r-celular"
                  type="tel"
                  placeholder="+51 9XX XXX XXX"
                  value={celular}
                  onChange={e => setCelular(e.target.value)}
                />
              </div>

              {/* Estrellas */}
              <div className="form-group">
                <label>Calificación</label>
                <StarPicker value={estrellas} onChange={setEstrellas} />
              </div>

              {/* Comentario */}
              <div className="form-group">
                <label htmlFor="r-comentario">Tu experiencia</label>
                <textarea
                  id="r-comentario"
                  placeholder="Cuéntanos cómo fue el servicio, qué lavamos, cómo quedó tu equipo..."
                  value={comentario}
                  onChange={e => setComentario(e.target.value)}
                  rows={4}
                />
              </div>

              {error && <div className="resena-error">{error}</div>}

              <button
                className="form-submit"
                onClick={handleEnviar}
                disabled={enviando}
              >
                {enviando ? 'Enviando...' : 'Publicar reseña 🏍️'}
              </button>

              <p className="resena-aviso">
                Tu reseña será revisada antes de publicarse. Solo usamos tu información para validar la autenticidad del comentario.
              </p>
            </div>
          )}
        </div>

        {/* ── Listado de reseñas aprobadas ── */}
        <div className="resenas-list">
          {loading ? (
            <div className="resenas-loading">Cargando reseñas...</div>
          ) : resenas.length === 0 ? (
            <div className="resenas-empty">
              <p>Aún no hay reseñas publicadas. ¡Sé el primero!</p>
            </div>
          ) : (
            resenas.map(r => <ResenaCard key={r.id} {...r} />)
          )}
        </div>

      </div>
    </section>
  );
}