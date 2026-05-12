const VALUES = [
  'Productos seguros para todos los materiales',
  'Proceso sin deterioro de protecciones internas',
  'Entrega rápida y puntual',
  'Atención personalizada por WhatsApp',
];

export default function NosotrosPage() {
  return (
    <section id="nosotros">
      <div className="nosotros-visual reveal">
        <div className="nosotros-badge-2">
          <div className="badge2-num">100%</div>
          <div className="badge2-label">Satisfacción</div>
        </div>
        <div className="hero-visual">
          <img src="public/img/somos.jpeg" alt="Equipo InduBiker" />
        </div>
      </div>

      <div className="nosotros-content reveal">
        <div className="section-tag">Quiénes somos</div>
        <h2 className="section-title">SOMOS<br />INDUBIKER</h2>
        <p className="nosotros-text">
          Nacimos de la <strong>pasión por las motos</strong> y la necesidad real de un
          servicio que no existía: limpiar el equipamiento del motociclista de forma
          profesional, segura y accesible.
        </p>
        <p className="nosotros-text">
          Sabemos lo que significa tu casco, tus guantes y tus botines — no son solo
          accesorios, son tu <strong>protección en cada kilómetro</strong>.
          Por eso los tratamos con el cuidado que merecen.
        </p>
        <div className="values-list">
          {VALUES.map(v => (
            <div className="value-item" key={v}>
              <div className="value-dot" />
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}