import { useState, useEffect, useRef } from 'react';

/**
 * GallerySlider
 * Props:
 *   slides — array de grupos, cada grupo es array de { src, alt, caption }
 *   interval — ms entre slides automáticos (default: 3500)
 */
export default function GallerySlider({ slides, interval = 3500 }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (index) => setCurrent(index);

  const next = () => setCurrent(prev => (prev + 1) % slides.length);

  const startTimer = () => {
    timerRef.current = setInterval(next, interval);
  };

  const stopTimer = () => clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <div
      className="gallery-slider-wrapper"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div
        className="gallery-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((group, gi) => (
          <div className="gallery-slide" key={gi}>
            {group.map((item, ii) => (
              <div className="gallery-item" key={ii}>
                <img src={item.src} alt={item.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-caption">{item.caption}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gallery-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`gallery-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
