import React from 'react';
import { motion } from 'framer-motion';

const Data = () => {
  const handWaveVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [-10, 20, -10],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const individualTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="home_data"
      initial="hidden"
      animate="visible"
      variants={textAnimationVariants}
    >
      <motion.h1 
        className="home_title"
        variants={individualTextVariants}
      >
        Dharshan
        <motion.svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand"
          variants={handWaveVariants}
          initial="initial"
          animate="animate"
        >
          {/* SVG paths remain the same */}
        </motion.svg>
      </motion.h1>

      <motion.h3 
        className="home_subtitle"
        variants={individualTextVariants}
      >
        Full Stack Developer
      </motion.h3>

      <motion.p 
        className="home_description"
        variants={individualTextVariants}
      >
        I am Dharshan , a passionate and detail-oriented Software Developer with expertise
        in crafting innovative, user-centric applications. My journey is rooted in a strong
        technical foundation, with skills in ReactJS, Java, NodeJS, and scalable backend systems.
        I excel in leveraging modern development tools and frameworks to tackle complex engineering challenges
      </motion.p>

      <motion.a 
        href="#contact" 
        className="button button--flex"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.2 }
        }}
        variants={individualTextVariants}
      >
        Say Hello 
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="var(--container-color)"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default Data;