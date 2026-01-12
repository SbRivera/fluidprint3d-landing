import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Palette, Printer, Package, CheckCircle } from 'lucide-react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Cuéntanos tu idea. Sin importar qué tan vaga o detallada sea, te escuchamos y asesoramos para definir el proyecto perfecto.',
    icon: MessageCircle,
    color: '#00D9FF',
  },
  {
    number: '02',
    title: 'Diseño Personalizado',
    description: 'Nuestro equipo crea o adapta el diseño 3D según tus especificaciones. Puedes solicitar ajustes hasta quedar 100% satisfecho.',
    icon: Palette,
    color: '#FF3366',
  },
  {
    number: '03',
    title: 'Impresión de Alta Calidad',
    description: 'Utilizamos tecnología de punta y materiales premium para dar vida a tu proyecto con precisión milimétrica.',
    icon: Printer,
    color: '#7B2DFF',
  },
  {
    number: '04',
    title: 'Acabados y Entrega',
    description: 'Aplicamos los acabados finales (pintura, pulido, etc.) y coordinamos la entrega segura de tu producto.',
    icon: Package,
    color: '#00D9FF',
  },
  {
    number: '05',
    title: 'Satisfacción Garantizada',
    description: 'Tu felicidad es nuestra meta. Nos aseguramos de que el resultado final supere tus expectativas.',
    icon: CheckCircle,
    color: '#FF3366',
  },
];

const Process = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="process section" id="process" ref={ref}>
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="process__label">Cómo Trabajamos</span>
          <h2 className="process__title">
            Del concepto a la
            <br />
            <span className="gradient-text">realidad tangible</span>
          </h2>
          <p className="process__subtitle">
            Un proceso simple y transparente donde tu participación es clave 
            para lograr el resultado perfecto.
          </p>
        </motion.div>

        <div className="process__timeline" ref={containerRef}>
          {/* Progress Line */}
          <div className="process__line">
            <motion.div 
              className="process__line-progress"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                className={`process__step ${isEven ? 'process__step--left' : 'process__step--right'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="process__step-content" style={{ '--step-color': step.color }}>
                  <motion.div 
                    className="process__step-icon"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </motion.div>
                  <div className="process__step-info">
                    <span className="process__step-number">{step.number}</span>
                    <h3 className="process__step-title">{step.title}</h3>
                    <p className="process__step-description">{step.description}</p>
                  </div>
                </div>
                <div className="process__step-dot" style={{ '--step-color': step.color }}>
                  <div className="process__step-dot-inner" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
