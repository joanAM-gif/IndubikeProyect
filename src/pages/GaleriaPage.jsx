import GallerySlider from '../components/GallerySlider';

const SLIDES = [
  [
    { src: 'public/img/gall-casco2.jpeg',   alt: 'Foto 1', caption: 'Team Kawasaki' },
    { src: 'public/img/gall-cliente.jpeg',  alt: 'Foto 2', caption: 'Cliente feliz' },
    { src: 'public/img/gall-guantes.jpeg',  alt: 'Foto 3', caption: 'AlpinStars' },
  ],
  [
    { src: 'public/img/gall-cliente2.jpeg', alt: 'Foto 4', caption: 'Cliente satisfecho' },
    { src: 'public/img/gall-casaca.jpeg',   alt: 'Foto 5', caption: 'Casaca Dainese' },
    { src: 'public/img/gall-casco.jpeg',    alt: 'Foto 6', caption: 'Casco LS2 Carbon' },
  ],
];

export default function GaleriaPage() {
  return (
    <section id="galeria">
      <div className="gallery-header reveal">
        <div>
          <div className="section-tag">Trabajos</div>
          <h2 className="section-title">GALERÍA</h2>
        </div>
        <a
          href="https://www.instagram.com/indubiker"
          target="_blank"
          rel="noreferrer"
          className="gallery-link"
        >
          Ver en Instagram →
        </a>
      </div>

      <GallerySlider slides={SLIDES} />
    </section>
  );
}
