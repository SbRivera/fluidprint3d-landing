import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="loading-screen__content">
        <motion.div
          className="loading-screen__logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="loading-screen__logo-text">
            Fluid<span className="gradient-text">Print</span>3D
          </span>
        </motion.div>

        <div className="loading-screen__loader">
          <motion.div
            className="loading-screen__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.p
          className="loading-screen__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Cargando experiencia...
        </motion.p>
      </div>

      {/* Animated Background Particles */}
      <div className="loading-screen__particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="loading-screen__particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
