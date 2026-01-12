import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Organizadora de Eventos',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Pedí souvenirs personalizados para una boda y el resultado fue espectacular. El equipo de FluidPrint3D entendió exactamente lo que buscaba y me asesoraron en cada detalle.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Cosplayer Profesional',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'El casco que me hicieron para mi cosplay de Mandalorian es increíble. La atención al detalle y la calidad del acabado superaron mis expectativas. ¡100% recomendado!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Lucía Torres',
    role: 'Gerente de Marketing',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: 'Necesitábamos artículos promocionales únicos para una campaña y FluidPrint3D nos entregó piezas que dejaron a todos impresionados. Excelente trabajo.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    role: 'Coleccionista',
    avatar: 'https://i.pravatar.cc/150?img=8',
    content: 'La figura personalizada que me crearon es una obra de arte. Desde la primera consulta hasta la entrega, todo fue profesional y transparente.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      {/* Background Elements */}
      <div className="testimonials__bg-quote">
        <Quote size={400} strokeWidth={0.5} />
      </div>

      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="testimonials__label">Testimonios</span>
          <h2 className="testimonials__title">
            Lo que dicen
            <br />
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        <motion.div
          className="testimonials__carousel"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="testimonials__cards">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="testimonial-card__quote">
                  <Quote size={40} />
                </div>

                <div className="testimonial-card__rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star size={20} fill="#FFD700" color="#FFD700" />
                    </motion.div>
                  ))}
                </div>

                <p className="testimonial-card__content">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="testimonial-card__author">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="testimonial-card__avatar"
                  />
                  <div className="testimonial-card__info">
                    <h4 className="testimonial-card__name">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="testimonial-card__role">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials__controls">
            <motion.button
              className="testimonials__control"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              className="testimonials__control"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
