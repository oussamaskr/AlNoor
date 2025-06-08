import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sheikha Amal Al-Khalifa',
      role: 'Luxury Connoisseur',
      comment: 'The Oud Royal from this house is the only fragrance that captures the true essence of Arabian nights. I receive compliments wherever I go.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
    },
    {
      id: 2,
      name: 'Ahmed Al-Farsi',
      role: 'Perfume Collector',
      comment: 'Their Amber Noir is unlike anything I\'ve experienced. The depth and longevity are extraordinary - truly worth every dirham.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 3,
      name: 'Layla Hassan',
      role: 'Fashion Influencer',
      comment: 'The floral bouquet in their "Desert Rose" evolves beautifully throughout the day. It\'s become my signature scent for special occasions.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };


  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            style={{ color: 'var(--color-textPrimary)' }}
          >
            Voices of Distinction
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6" 
            style={{ backgroundColor: 'var(--color-accent)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto" 
            style={{ color: 'var(--color-textPrimary)' }}
          >
            Discover what our esteemed clients say about our exquisite fragrances
          </p>
        </motion.div>

        {/* Testimonial Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            initial={{opacity:0 , y : 50}}
           whileInView={{opacity : 1 , y : 0}}
            transition={{duration:1 ,delay : 0.35 * testimonial.id, ease:"easeOut"}}
            viewport={{once:true}}
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-callAction"
            />
            <h3 className="text-lg font-semibold text-[#2D3436]">{testimonial.name}</h3>
            <p className="text-sm text-accent  mb-2">{testimonial.role}</p>
            <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-5 h-5 ${
                    index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill={index < testimonial.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;