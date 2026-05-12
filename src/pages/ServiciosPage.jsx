import ServiceCard from '../components/ServiceCard';

const SERVICES = [
  {
    icon: '/img/iconoCasco.png',
    name: 'Lavado de Casco',
    desc: 'Limpieza interior y exterior profunda del casco. Eliminamos bacterias, sudor y malos olores sin dañar la espuma ni los acabados.',
  },
  {
    icon: '/img/iconoGuantes.png',
    name: 'Lavado de Guantes',
    desc: 'Tratamiento especial para guantes de cuero y textil. Limpieza profunda que mantiene la flexibilidad y el grip original.',
  },
  {
    icon: '/img/iconoBotines.png',
    name: 'Lavado de Botines',
    desc: 'Limpieza y desodorización de botines para moto. Recuperamos el calzado respetando los materiales técnicos y protecciones.',
  },
  {
    icon: '/img/iconoCasaca.png',
    name: 'Lavado de Casaca',
    desc: 'Servicio de limpieza para casacas de cuero, estándar y de doble capa, utilizando productos y procesos profesionales que garantizan una limpieza profunda, cuidando el material de origen.',
  },
];

const PRICES = [
  { value: 'S/35.00', label: 'Casco' },
  { value: 'S/28.00', label: 'Guantes' },
  { value: 'S/45.00', label: 'Botines' },
  { value: 'S/70.00', label: 'Casaca' },
];

export default function ServiciosPage() {
  return (
    <section id="servicios">
      <div className="services-header reveal">
        <div>
          <div className="section-tag">Lo que hacemos</div>
          <h2 className="section-title">NUESTROS<br />SERVICIOS</h2>
        </div>
        <p className="services-intro">
          Cada servicio está diseñado para prolongar la vida útil de tu equipamiento,
          eliminar bacterias y malos olores, y devolverle el aspecto original.
          Porque tu seguridad empieza por el cuidado de tu equipo.
        </p>
      </div>

      <div className="services-grid reveal">
        {SERVICES.map(s => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>

      {/* Franja de precios */}
      <div className="prices-strip reveal">
        <h3>PRECIOS ACCESIBLES</h3>
        <div className="price-items">
          {PRICES.map((p, i) => (
            <>
              <div className="price-item" key={p.label}>
                <div className="price-value">{p.value}</div>
                <div className="price-label">{p.label}</div>
              </div>
              {i < PRICES.length - 1 && <div className="price-divider" key={`d${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
