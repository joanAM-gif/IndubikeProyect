import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x   from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon     from 'leaflet/dist/images/marker-icon.png';
import markerShadow   from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl:       markerIcon,
  shadowUrl:     markerShadow,
});

const LAT      = -12.0244592;
const LNG      = -77.0281348;
const ZOOM     = 16;
const MAPS_URL = 'https://maps.app.goo.gl/j282TUzr3FQhKDZZ9';

export default function MapaUbicanos() {
  useEffect(() => {
    
    const container = document.getElementById('indubiker-map');
    if (!container || container._leaflet_id) return;

    const map = L.map('indubiker-map', { scrollWheelZoom: false })
      .setView([LAT, LNG], ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        background:#FF6B00;
        width:38px;height:38px;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        border:3px solid #fff;
        box-shadow:0 4px 16px rgba(255,107,0,0.5);
        display:flex;align-items:center;justify-content:center;
      "><span style="transform:rotate(45deg);font-size:17px;line-height:1;">🏍️</span></div>`,
      iconSize:    [38, 38],
      iconAnchor:  [19, 38],
      popupAnchor: [0, -42],
    });

    L.marker([LAT, LNG], { icon })
      .addTo(map)
      .bindPopup(`
        <div class="map-popup-title">InduBiker</div>
        <div class="map-popup-sub">Tu mejor aliado para la limpieza de tu indumentaria</div>
        <a href="${MAPS_URL}" target="_blank"
           style="display:inline-block;margin-top:8px;color:#FF6B00;
                  font-size:0.8rem;font-weight:700;letter-spacing:1px;">
          Ver en Google Maps →
        </a>`)
      .openPopup();

    return () => { map.remove(); };
  }, []);

  return <div id="indubiker-map" style={{ height: '420px', width: '100%' }} />;
}