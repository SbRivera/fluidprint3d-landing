import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappNumbers = [
    { number: '+593995085689', display: '+593 99 508 5689' },
    { number: '+593995085634', display: '+593 99 508 5634' },
  ];

  const openWhatsApp = (number) => {
    const message = encodeURIComponent('¡Hola! Me interesa cotizar un proyecto de impresión 3D con FluidPrint3D.');
    window.open(`https://wa.me/${number.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicios: [
      { name: 'Regalos Personalizados', href: '#services' },
      { name: 'Publicidad & Marca', href: '#services' },
      { name: 'Cosplays & Props', href: '#services' },
      { name: 'Diseño a Medida', href: '#services' },
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#hero' },
      { name: 'Nuestro Proceso', href: '#process' },
      { name: 'Galería', href: '#gallery' },
      { name: 'Testimonios', href: '#testimonials' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <motion.a 
              href="#hero" 
              className="footer__logo"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/Logo2.png" alt="FluidPrint3D" className="footer__logo-img" />
            </motion.a>
            <p className="footer__description">
              Transformamos ideas en realidades tangibles. Especialistas en impresión 3D 
              personalizada con enfoque en la satisfacción total del cliente.
            </p>
            
            {/* WhatsApp CTAs */}
            <div className="footer__whatsapp">
              <span className="footer__whatsapp-label">
                <FaWhatsapp /> Contáctanos:
              </span>
              <div className="footer__whatsapp-numbers">
                {whatsappNumbers.map((wa, index) => (
                  <motion.button
                    key={index}
                    className="footer__whatsapp-btn"
                    onClick={() => openWhatsApp(wa.number)}
                    whileHover={{ scale: 1.05, color: '#25D366' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {wa.display}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="footer__social">
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTiktok size={20} />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">Servicios</h4>
            <ul className="footer__links">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className="footer__link"
                    whileHover={{ x: 5, color: '#00D9FF' }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Empresa</h4>
            <ul className="footer__links">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className="footer__link"
                    whileHover={{ x: 5, color: '#00D9FF' }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="footer__cta-section">
            <h4 className="footer__cta-title">¿Tienes un proyecto en mente?</h4>
            <p className="footer__cta-text">
              No importa cuán loco sea, ¡queremos escucharlo!
            </p>
            <motion.a
              href="#contact"
              className="footer__cta-button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Empezar Proyecto
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} FluidPrint3D. Todos los derechos reservados.
          </p>
          <p className="footer__tagline">
            Hecho con 💜 e innovación en Ecuador
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        className="footer__scroll-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
