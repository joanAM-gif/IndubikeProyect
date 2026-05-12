import ProcessStep from '../components/ProcessStep';

const STEPS = [
  {
    number: '01',
    title: 'Contáctanos',
    desc: 'Escríbenos por WhatsApp o redes sociales para coordinar el recojo o entrega de tu equipo.',
  },
  {
    number: '02',
    title: 'Entregas tu equipo',
    desc: 'Acordamos el punto de entrega o lo recogemos nosotros. Sin complicaciones.',
  },
  {
    number: '03',
    title: 'Limpieza profunda',
    desc: 'Aplicamos el tratamiento profesional adecuado para cada tipo de equipamiento y material.',
  },
  {
    number: '04',
    title: '¡Lo recibes y listo!',
    desc: 'Te devolvemos el equipo limpio, sin olores y en perfectas condiciones para volver a rodar. ¡A rodar limpio y seguro!',
    isLast: true,
  },
];

export default function ProcesoPage() {
  return (
    <div className="process-section">
      <div className="section-tag reveal">El proceso</div>
      <h2 className="section-title reveal">CÓMO FUNCIONA</h2>
      <div className="process-grid">
        {STEPS.map(s => <ProcessStep key={s.number} {...s} />)}
      </div>
    </div>
  );
}
