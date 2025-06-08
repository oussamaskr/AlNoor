import React from 'react';
import { motion } from 'framer-motion';
import perfumeBottle from "../../assets/supremacycollectoreditiom.png";

const NewArrivals = () => {
  // Animation variants using theme colors
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 0.77, 0.47, 0.97],
        when: "beforeChildren"
      }
    }
  };

  const letterAnimation = {
    hidden: { y: 40, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const bottleFloat = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: [0, -15, 0],
      opacity: 1,
      scale: 1,
      transition: {
        y: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 1, ease: "circOut" },
        scale: { duration: 1, ease: "backOut" }
      }
    }
  };

  // Floating tropical elements configuration
  const tropicalElements = [
    { 
      color: "var(--color-accent)", 
      size: "w-16 h-16", 
      yRange: -25, 
      duration: 9, 
      delay: 0, 
      position: "top-1/4 left-1/5",
      opacity: 0.15
    },
    { 
      color: "var(--color-highlight)", 
      size: "w-12 h-12", 
      yRange: -20, 
      duration: 7, 
      delay: 0.3, 
      position: "bottom-1/3 right-1/4",
      opacity: 0.12
    },
    { 
      color: "var(--color-callAction)", 
      size: "w-10 h-10", 
      yRange: -15, 
      duration: 6, 
      delay: 0.6, 
      position: "top-1/3 right-1/5",
      opacity: 0.1
    }
  ];

  return (
    <section id='new-arrival'
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: `radial-gradient(ellipse at center, var(--color-primary) 0%, var(--color-background) 70%)`
        }}
      />

      {/* Animated light rays */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.5, duration: 2 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='rays' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 40L40 0ZM40 40L80 0Z' stroke='${encodeURIComponent('var(--color-accent)')}' stroke-width='1' stroke-opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23rays)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Theme-colored glow effects */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute top-20 left-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: 'var(--color-accent)', opacity: 0.08 }}
        />
        <div 
          className="absolute bottom-20 right-20 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full blur-[80px]"
          style={{ backgroundColor: 'var(--color-highlight)', opacity: 0.06 }}
        />
      </motion.div>

      {/* Floating tropical elements */}
      {tropicalElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} rounded-full blur-lg z-0`}
          style={{
            backgroundColor: element.color,
            opacity: element.opacity
          }}
          animate={{
            y: [0, element.yRange, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            y: {
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            },
            scale: {
              duration: element.duration * 0.7,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-24">
          {/* Text content */}
          <motion.div 
            className="lg:w-1/2 space-y-8 text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <motion.span 
              className="inline-block font-medium tracking-widest mb-2"
              style={{ color: 'var(--color-accent)' }}
              variants={letterAnimation}
            >
              COLLECTOR'S EDITION
            </motion.span>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-6xl font-bold mt-2 leading-tight max-sm:text-4xl"
              style={{ color: 'var(--color-textPrimary)' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.03, delayChildren: 0.2 }
                }
              }}
            >
              {"AFNAN SUPREMACY".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={letterAnimation}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg max-w-lg ml-auto"
              style={{ color: 'var(--color-textPrimary)' }}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.8 }
                }
              }}
            >
              A vibrant fusion of{" "}
              <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>juicy pineapple</span>, fresh florals, and warm amber that lasts all day.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-end"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.6 }
                }
              }}
            >
              <motion.button 
                className="px-8 py-3 text-white font-medium rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg"
                style={{ 
                  backgroundColor: 'var(--color-callAction)',
                  backgroundImage: 'linear-gradient(to right, var(--color-callAction), var(--color-highlight))',
                  boxShadow: '0 4px 15px rgba(193, 154, 107, 0.3)'
                }}
                variants={letterAnimation}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 6px 20px rgba(193, 154, 107, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Collection
              </motion.button>
              <motion.button 
                className="px-8 py-3 border font-medium rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  backgroundColor: 'transparent'
                }}
                variants={letterAnimation}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'rgba(183, 142, 86, 0.08)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Notes
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Perfume Bottle */}
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            variants={bottleFloat}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-md">
              <img
                src={perfumeBottle}
                alt="Afnan Supremacy Collector's Edition Perfume Bottle"
                className="w-full h-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 25px 35px rgba(183, 142, 86, 0.25))'
                }}
              />
              {/* Animated bottle glow */}
              <motion.div 
                className="absolute -inset-20 rounded-full blur-[100px] -z-10"
                style={{ backgroundColor: 'var(--color-accent)' }}
                animate={{
                  opacity: [0.08, 0.15, 0.08],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Subtle reflection */}
              <div 
                className="absolute -bottom-16 left-1/4 right-1/4 h-8 bg-gradient-to-t blur-lg"
                style={{ 
                  background: 'linear-gradient(to top, rgba(183, 142, 86, 0.15), transparent)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;