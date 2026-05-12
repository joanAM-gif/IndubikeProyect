export default function HomePage() {
  return (
    <section id="inicio">
      {/* Columna izquierda */}
      <div className="hero-left">
        <div className="hero-tag">Limpieza Profesional</div>

        <h1 className="hero-title">
          Tu equipo<br />
          <span className="accent">limpio,</span><br />
          <span className="outline">seguro.</span>
        </h1>

        <p className="hero-sub">
          Especializados en{' '}
          <strong>lavado profundo de cascos, guantes, botines, casacas y monotrajes</strong>{' '}
          para motociclistas. Higiene real, sin dañar tus prendas.
        </p>

        <div className="hero-actions">
          <a href="#servicios" className="btn-primary">Ver servicios y precios →</a>
          <a href="#nosotros"  className="btn-secondary">Sobre nosotros</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">500<span>+</span></div>
            <div className="stat-label">Equipos lavados</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4<span>.9</span></div>
            <div className="stat-label">Calificación</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100<span>%</span></div>
            <div className="stat-label">Satisfacción</div>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="hero-right">
        <div className="hero-bg-shape" />
        <div className="hero-orange-bar" />
        <div className="hero-visual">
          <img src="/img/logo.PNG" alt="InduBiker Logo" />
        </div>
        <div className="hero-badge">
          <div className="badge-text">🏍️ ESPECIALISTAS EN EL CUIDADO</div>
          <div className="badge-sub">E higiene para tu indumentaria motera</div>
        </div>
      </div>
    </section>
  );
}
