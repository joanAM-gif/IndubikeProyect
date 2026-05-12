import { useState } from 'react';

const INITIAL = { nombre: '', telefono: '', servicio: '', mensaje: '' };

/**
 * useContactForm
 * Gestiona el estado del formulario de contacto y el envío por WhatsApp.
 */
export function useContactForm() {
  const [fields, setFields] = useState(INITIAL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const texto =
      `Hola InduBiker! 👋\n\n` +
      `*Nombre:* ${fields.nombre  || 'No especificado'}\n` +
      `*Teléfono:* ${fields.telefono || 'No especificado'}\n` +
      `*Servicio:* ${fields.servicio || 'No especificado'}\n` +
      `*Mensaje:* ${fields.mensaje  || 'Sin mensaje adicional'}`;

    window.open(`https://wa.me/51993706383?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return { fields, handleChange, handleSubmit };
}
