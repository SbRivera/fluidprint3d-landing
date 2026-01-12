import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const whatsappNumbers = [
    { number: '+593995085689', display: '+593 99 508 5689' },
    { number: '+593995085634', display: '+593 99 508 5634' },
  ];

  const openWhatsApp = (number) => {
    const message = encodeURIComponent('¡Hola! Me interesa cotizar un proyecto de impresión 3D con FluidPrint3D.');
    window.open(`https://wa.me/${number.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      {/* Background */}
      <div className="contact__bg-gradient" />

      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="contact__label">Contacto</span>
          <h2 className="contact__title">
            ¿Listo para crear
            <br />
            <span className="gradient-text">algo increíble?</span>
          </h2>
          <p className="contact__subtitle">
            Contáctanos por WhatsApp para una respuesta inmediata o déjanos un mensaje 
            y te responderemos a la brevedad.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* WhatsApp Buttons - Primary CTA */}
          <motion.div
            className="contact__whatsapp"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact__whatsapp-header">
              <FaWhatsapp size={40} className="contact__whatsapp-icon" />
              <div>
                <h3>Escríbenos por WhatsApp</h3>
                <p>Respuesta inmediata • Asesoría personalizada</p>
              </div>
            </div>

            <div className="contact__whatsapp-buttons">
              {whatsappNumbers.map((wa, index) => (
                <motion.button
                  key={index}
                  className="contact__whatsapp-btn"
                  onClick={() => openWhatsApp(wa.number)}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(37, 211, 102, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaWhatsapp size={24} />
                  <span>{wa.display}</span>
                  <MessageCircle size={18} />
                </motion.button>
              ))}
            </div>

            <div className="contact__info">
              <div className="contact__info-item">
                <Mail size={20} />
                <span>info@fluidprint3d.com</span>
              </div>
              <div className="contact__info-item">
                <MapPin size={20} />
                <span>Ecuador</span>
              </div>
            </div>

            {/* Features */}
            <div className="contact__features">
              <div className="contact__feature">
                <CheckCircle size={18} />
                <span>Asesoría sin compromiso</span>
              </div>
              <div className="contact__feature">
                <CheckCircle size={18} />
                <span>Cotización gratuita</span>
              </div>
              <div className="contact__feature">
                <CheckCircle size={18} />
                <span>Diseño personalizado</span>
              </div>
              <div className="contact__feature">
                <CheckCircle size={18} />
                <span>Satisfacción garantizada</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="contact__form-title">O déjanos un mensaje</h3>

            <div className="contact__form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formState.name}
                onChange={handleChange}
                required
                className="contact__input"
              />
            </div>

            <div className="contact__form-row">
              <div className="contact__form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                />
              </div>
              <div className="contact__form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono (opcional)"
                  value={formState.phone}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>
            </div>

            <div className="contact__form-group">
              <textarea
                name="message"
                placeholder="Cuéntanos tu idea o proyecto..."
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact__textarea"
              />
            </div>

            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  <span>¡Mensaje Enviado!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
