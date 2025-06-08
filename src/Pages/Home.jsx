import React from 'react'
import HomeBanner from '../Conponents/HomeBanner/HomeBanner'
import NewArrivals from '../Conponents/NewArrivals/NewArrivals'
import { motion } from 'framer-motion'
import BrandsShowcase from "../Conponents/BrandsShowcase/BrandsShowcase"
import Testimonial from '../Conponents/Testimonial/Testimonial'

function Home() {
  const categories = [
    {
      name: "Luxury Collections",
      description: "Premium designer fragrances",
      image: "https://i.ibb.co/4vxvSy7/Noir-By-Night4-b9e0f4a3-568d-4e17-aceb-c5b8dfe034e5.jpg",
    },
    {
      name: "Fresh & Fruity",
      description: "Vibrant citrus and tropical scents",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Woody & Spicy",
      description: "Rich oriental compositions",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      name: "Floral Bouquets",
      description: "Delicate feminine florals",
      image: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
    {
      name: "Oud & Amber",
      description: "Middle Eastern treasures",
      image: "https://i.ibb.co/Kcv5hzBV/1.jpg",
    },
    {
      name: "Summer Specials",
      description: "Light seasonal favorites",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
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
    <div>
      <HomeBanner/>

      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-textPrimary)' }}>
              Browse by Category
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-textPrimary)' }}>
              Discover your perfect scent from our carefully curated collections
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => (
          <motion.div
                key={index}
                variants={cardVariants}
                initial={{y:35 , opacity:0 }}
                whileInView={{y:0 ,opacity:1}}
                viewport={{ once: true, margin: "-50px" }}
                transition={{duration: 0.25 * index, delay:0.15 * index}} 
                className="relative rounded-xl overflow-hidden border border-opacity-20 transition-all duration-300 hover:shadow-lg h-[25vh] min-h-[250px]"
              >
                <img 
                  src={category.image} 
                  className='absolute w-full h-full z-0 object-cover' 
                  alt={category.name}
                />
 <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0'></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-gray-200 relative z-10">
                    {category.description}
                  </p>
                  <button
                    className="text-sm font-medium px-4 py-2 rounded-full transition-colors relative z-10 cursor-pointer text-white border-2 border-white hover:bg-white hover:text-gray-800 w-max" 
                  >
                    View Collection
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-callAction)',
                color: 'var(--color-textSecondary)',
                boxShadow: '0 4px 15px rgba(193, 154, 107, 0.3)'
              }}
            >
              View All Categories
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cultural Intro */}
      <section className="py-20 px-4 max-w-6xl mx-auto my-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">The Art of Arabian Perfumery</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            For centuries, the Arabian Peninsula has perfected the craft of fragrance-making. 
            Our collection honors this tradition with authentic oud, amber, and floral blends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon: "🌿", title: "Natural Ingredients", desc: "Sourced from local markets"},
            {icon: "👑", title: "Royal Heritage", desc: "Worn by Gulf nobility for generations"},
            {icon: "🧪", title: "Modern Craft", desc: "Traditional methods meet contemporary blends"}
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, transition:{duration:0.2} }}
              initial={{opacity:0, y:75}}
              whileInView={{opacity:1, y : 0}}
              transition={{delay:0.25*index, duration:1}}
              viewport={{once:true, margin:"0px 0px -50px 0px "}}
              className="bg-primary/50 p-6 rounded-lg shadow-lg text-center"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-2xl font-bold text-callAction mb-2">{item.title}</h3>
              <p className="text-textPrimary text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <NewArrivals/>

      {/* CTA Section */}
      <section className="relative py-20 mt-9 text-white text-center bg-center bg-cover" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1615368144592-5d7a8d5d9e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
        <div className="relative max-w-4xl mx-auto px-4 z-10 ">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Arabian Luxury?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands who've discovered their signature scent through our collection
          </p>
          <div className="flex flex-wrap gap-3.5 items-center justify-center">
            <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-50">
              Shop All Perfumes
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-amber-900">
              Contact Us
            </button>
          </div>
        </div>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-amber-900/70 to-amber-700/70 z-0'></div>
      </section>




      <BrandsShowcase />




        <Testimonial/>




    </div>
  )
}

export default Home