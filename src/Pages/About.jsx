import { motion } from 'motion/react';
import { useState } from 'react';
import bannerAboutimage from "../assets/quel-parfum-arabe-sent-le-plus-bon.webp"
function About() {
        const tabs = [
  {
    id: 'oud',
    title: 'Oud Collection',
    content: 'Experience the deep, woody richness of aged Oud sourced from the Arabian Peninsula.',
    image: 'https://fragrance-cleopatre.com/wp-content/uploads/2024/09/pixelup_1727583261058.jpg'
  },
  {
    id: 'attar',
    title: 'Attar Oils',
    content: 'Alcohol-free pure oil blends in classic Arabian tradition, long-lasting and mesmerizing.',
    image: 'https://kannaujattar.com/wp-content/uploads/2020/10/natural-attar-perfumes-set-400x400-1.png'
  },
  {
    id: 'gifts',
    title: 'Luxury Gift Sets',
    content: 'Elegant boxes with curated fragrances, ideal for weddings, Eid, or special occasions.',
    image: 'https://media.s-bol.com/mgpED6jpLXBO/rkZ22np/1200x913.jpg'
  }
];

  const [activeTab, setActiveTab] = useState("oud");

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
    const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" }
    }
  };




  return (
    <>
    <section 
      className="relative h-[70vh] max-sm:h-[90vh] overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={bannerAboutimage}
          alt="Arabian perfumery"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ filter: 'brightness(0.9) contrast(1.05)' }}

        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(45deg, var(--color-secondary)/70%, var(--color-accent)/30%)' 
          }}
        ></div>
      </div>
        <div className='absolute inset-0 bg-black/60 w-full h-full'></div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: 'var(--color-textSecondary)' }}
              >
                Our <span style={{ color: 'var(--color-callAction)' }}>Perfumed</span> Legacy
              </motion.h1>
              
              <motion.p 
                className="text-xl mb-8 max-w-lg"
                style={{ color: 'var(--color-textSecondary)' }}
                variants={textVariants}
              >
                Centuries of Arabian fragrance craftsmanship, distilled into every exquisite bottle
              </motion.p>
              
              <motion.div variants={textVariants}>
                <button
                  className="px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: 'var(--color-callAction)',
                    color: 'var(--color-textSecondary)',
                    boxShadow: '0 4px 15px rgba(193, 154, 107, 0.4)'
                  }}
                >
                  Discover Our Story
                </button>
              </motion.div>
            </motion.div>

            {/* Perfume Bottle */}
  
          </div>
        </div>
      </div>


    </section>










<section 
  className="py-20 px-4 sm:px-6 lg:px-8"
>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 
        className="text-4xl md:text-5xl font-bold mb-4" 
        style={{ color: 'var(--color-textPrimary)' }}
      >
        The Art of Oriental Fragrance
      </h2>
      <div 
        className="w-32 h-1 mx-auto mb-6" 
        style={{ backgroundColor: 'var(--color-accent)' }}
      ></div>
      <p 
        className="text-lg max-w-3xl mx-auto" 
        style={{ color: 'var(--color-textPrimary)' }}
      >
        Journey into the world of Arabian perfumery — where ancient rituals and rare essences blend into timeless luxury.
      </p>
    </motion.div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Tabs */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            variants={fadeIn}
            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTab === tab.id 
                ? 'border-l-4' 
                : 'hover:bg-opacity-50'
            }`}
            style={{
              backgroundColor: activeTab === tab.id 
                ? 'var(--color-primary)' 
                : 'var(--color-background)',
              borderColor: 'var(--color-accent)',
              color: 'var(--color-textPrimary)'
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <h3 
              className="text-2xl font-bold mb-2" 
              style={{ color: 'var(--color-textPrimary)' }}
            >
              {tab.title}
            </h3>
            <p style={{ color: 'var(--color-textPrimary)' }}>{tab.content}</p>
          </motion.div>
        ))}

        {/* Stats */}
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          {[
            { number: '1895', label: 'Heritage Since' },
            { number: '47', label: 'Countries Reached' },
            { number: '100%', label: 'Pure Oud & Musk' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg text-center shadow-sm"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-textPrimary)'
              }}
            >
              <p 
                className="text-3xl font-bold" 
                style={{ color: 'var(--color-accent)' }}
              >
                {stat.number}
              </p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src={tabs.find(tab => tab.id === activeTab)?.image}
          alt={activeTab}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to top, var(--color-secondary)/30, transparent)' 
          }}
        ></div>
      </motion.div>
    </div>

    {/* Founder Quote */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-20 p-8 rounded-xl shadow-sm"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-accent)'
      }}
    >
      <blockquote className="text-center">
        <svg 
          className="w-8 h-8 mx-auto mb-4" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          style={{ color: 'var(--color-accent)' }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p 
          className="text-xl italic mb-4" 
          style={{ color: 'var(--color-textPrimary)' }}
        >
          "A single drop of attar holds centuries of secrets — stories whispered in the souks of Arabia and sealed in golden flasks."
        </p>
        <footer style={{ color: 'var(--color-accent)' }}>
          — Sheikh Khalid Al-Farsi, Master Perfumer
        </footer>
      </blockquote>
    </motion.div>
  </div>
</section>

    </>
  )
}

export default About
