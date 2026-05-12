import Navbar          from './components/Navbar';
import Footer          from './components/Footer';
import WhatsAppFloat   from './components/WhatsAppFloat';

import HomePage        from './pages/HomePage';
import ServiciosPage   from './pages/ServiciosPage';
import ProcesoPage     from './pages/ProcesoPage';
import GaleriaPage     from './pages/GaleriaPage';
import TestimoniosPage from './pages/TestimoniosPage';
import ResenasPage from './pages/ResenasPage';
import NosotrosPage    from './pages/NosotrosPage';
import ContactoPage    from './pages/ContactoPage';
import UbicanosPage    from './pages/UbicanosPage';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useNavScroll }    from './hooks/useNavScroll';

export default function App() {
  useScrollReveal();
  useNavScroll();

  return (
    <>
      <Navbar />

      <main>
        <HomePage />
        <ServiciosPage />
        <ProcesoPage />
        <GaleriaPage />
        <TestimoniosPage />
        <ResenasPage />
        <NosotrosPage />
        <ContactoPage />
        <UbicanosPage />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}