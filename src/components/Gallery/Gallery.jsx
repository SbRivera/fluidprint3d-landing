import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './Gallery.css';

const projects = [
  {
    id: 1,
    title: 'Figura de Colección',
    category: 'Coleccionables',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    description: 'Figura detallada de personaje para coleccionista.',
  },
  {
    id: 2,
    title: 'Trofeo Corporativo',
    category: 'Publicidad',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop',
    description: 'Premio personalizado con identidad de marca.',
  },
  {
    id: 3,
    title: 'Casco Cosplay',
    category: 'Cosplay',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&h=400&fit=crop',
    description: 'Casco de armadura para cosplay profesional.',
  },
  {
    id: 4,
    title: 'Lámpara Decorativa',
    category: 'Decoración',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    description: 'Lámpara personalizada con diseño único.',
  },
  {
    id: 5,
    title: 'Souvenir Personalizado',
    category: 'Regalos',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
    description: 'Regalo único para ocasiones especiales.',
  },
  {
    id: 6,
    title: 'Prototipo Industrial',
    category: 'Prototipos',
    image: 'https://images.unsplash.com/photo-1631544917929-08b8d6e71d73?w=600&h=400&fit=crop',
    description: 'Prototipo funcional para validación de diseño.',
  },
];

const categories = ['Todos', 'Coleccionables', 'Publicidad', 'Cosplay', 'Decoración', 'Regalos', 'Prototipos'];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="gallery section" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="gallery__label">Portafolio</span>
          <h2 className="gallery__title">
            Proyectos que
            <br />
            <span className="gradient-text">inspiran</span>
          </h2>
          <p className="gallery__subtitle">
            Estos son solo algunos ejemplos. Recuerda que creamos diseños completamente 
            personalizados basados en tus ideas y necesidades específicas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="gallery__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`gallery__filter ${activeCategory === category ? 'gallery__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="gallery__grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="gallery__item-image">
                  <img src={project.image} alt={project.title} />
                  <motion.div 
                    className="gallery__item-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  >
                    <motion.div
                      className="gallery__item-content"
                      initial={{ y: 20 }}
                      animate={{ y: hoveredProject === project.id ? 0 : 20 }}
                    >
                      <span className="gallery__item-category">{project.category}</span>
                      <h3 className="gallery__item-title">{project.title}</h3>
                      <p className="gallery__item-description">{project.description}</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          className="gallery__info"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="gallery__info-icon">💡</div>
          <div className="gallery__info-content">
            <h4>¿No ves lo que buscas?</h4>
            <p>
              Nuestro catálogo es solo una muestra. Trabajamos contigo para diseñar 
              exactamente lo que imaginas, desde cero si es necesario.
            </p>
          </div>
          <motion.a
            href="#contact"
            className="gallery__info-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Cuéntanos tu idea
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
