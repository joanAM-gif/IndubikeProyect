/**
 * ServiceCard
 * Props:
 *   icon    — ruta de imagen o emoji string
 *   name    — nombre del servicio
 *   desc    — descripción
 *   isImg   — true si `icon` es una ruta de imagen (default: true)
 */
export default function ServiceCard({ icon, name, desc, isImg = true }) {
  return (
    <div className="service-card">
      <span className="service-icon">
        {isImg
          ? <img src={icon} alt={name} width="120" height="120" />
          : icon
        }
      </span>
      <div className="service-name">{name}</div>
      <p className="service-desc">{desc}</p>
      <span className="service-price-tag">Ver precio →</span>
    </div>
  );
}
