import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Target, Users, Shield, Gift, Palette } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Cultivamos ideas creativas y soluciones avanzadas. Exploramos nuevas posibilidades en cada proyecto con tecnología de vanguardia.',
    color: '#14BFFF',
  },
  {
    icon: Target,
    title: 'Precisión',
    description: 'Buscamos la exactitud en cada detalle y pieza. Nuestro compromiso es la perfección en cada impresión y acabado.',
    color: '#FF8C46',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos en equipo y valoramos las alianzas. Tu participación es clave para lograr el resultado perfecto.',
    color: '#40E0D0',
  },
  {
    icon: Shield,
    title: 'Calidad',
    description: 'Nos comprometemos con la excelencia constante. Utilizamos materiales premium y procesos certificados.',
    color: '#14BFFF',
  },
  {
    icon: Gift,
    title: 'Regalos & Merchandising',
    description: 'Artículos personalizados únicos e inolvidables. Desde regalos corporativos hasta souvenirs especiales.',
    color: '#FF8C46',
  },
  {
    icon: Palette,
    title: 'Diseño Personalizado',
    description: 'Te asesoramos hasta dar con exactamente lo que buscas. Tu satisfacción es nuestra máxima prioridad.',
    color: '#40E0D0',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="service-card"
      variants={cardVariants}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${service.color}30`
      }}
      style={{ '--accent-color': service.color }}
    >
      <div className="service-card__icon">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>
      <motion.div 
        className="service-card__number"
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="services section" id="services" ref={ref}>
      {/* Background Elements */}
      <div className="services__bg-gradient" />
      
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="services__label">Nuestros Servicios</span>
          <h2 className="services__title">
            Más que un catálogo,
            <br />
            <span className="gradient-text">creamos tus sueños</span>
          </h2>
          <p className="services__subtitle">
            No solo ofrecemos productos prediseñados. Te asesoramos de principio a fin 
            hasta dar con exactamente lo que necesitas. Tu satisfacción es nuestro objetivo.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="services__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="services__cta-text">
            ¿Tienes una idea en mente? ¡Cuéntanos! Hacemos realidad cualquier concepto.
          </p>
          <motion.a
            href="#contact"
            className="services__cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Consulta Gratis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
