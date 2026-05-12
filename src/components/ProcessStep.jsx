/**
 * ProcessStep
 * Props:
 *   number  — número del paso (ej: "01")
 *   title   — título del paso
 *   desc    — descripción del paso
 *   isLast  — si es el último paso (oculta la flecha →)
 */
export default function ProcessStep({ number, title, desc, isLast = false }) {
  return (
    <div className={`process-step reveal${isLast ? ' process-step--last' : ''}`}>
      <div className="step-number">{number}</div>
      <div className="step-title">{title}</div>
      <p className="step-desc">{desc}</p>
    </div>
  );
}
