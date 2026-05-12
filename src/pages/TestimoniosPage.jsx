import TestimonioCard from '../components/TestimonioCard';

const TESTIMONIOS = [
  {
    initials: 'MR',
    name: 'Matías R.',
    role: 'Motociclista urbano',
    text: 'Mandé mi casco con mucho olor a sudor después de meses de uso. Lo recibí como nuevo, sin ningún olor y la espuma interior impecable. Totalmente recomendable.',
  },
  {
    initials: 'LC',
    name: 'Laura C.',
    role: 'Rider de ruta',
    text: 'Mis guantes de cuero quedaron perfectos. Pensé que ya no tenían solución y los devolvieron flexibles y sin olor. El servicio fue rápido y muy profesional.',
  },
  {
    initials: 'FG',
    name: 'Federico G.',
    role: 'Motociclista deportivo',
    text: 'Excelente atención y resultado increíble. Los botines parecen nuevos. Muy accesible el precio para la calidad del trabajo. Ya los tengo guardados en el contacto.',
  },
];

export default function TestimoniosPage() {
  return (
    <section id="testimonios">
      <div className="testimonios-header reveal">
        <div className="section-tag">Lo que dicen</div>
        <h2 className="section-title">CLIENTES<br />SATISFECHOS</h2>
      </div>
      <div className="testimonios-grid">
        {TESTIMONIOS.map(t => <TestimonioCard key={t.name} {...t} />)}
      </div>
    </section>
  );
}
