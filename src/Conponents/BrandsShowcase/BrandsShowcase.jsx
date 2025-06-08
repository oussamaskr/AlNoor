import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';

import lattafa from "../../assets/Brands/Lattafa.jfif"
import afnan from "../../assets/Brands/Afnan.jfif"
import armaf from "../../assets/Brands/ARMAF.jfif"
import rasasi from "../../assets/Brands/rasasi.jfif"
import omanLuxury from "../../assets/Brands/Oman Luxury.jfif"
import swissArabian from "../../assets/Brands/Swiss Arabian.jfif"
import amouage from "../../assets/Brands/Amouage.jfif"
const BrandsShowcase = () => {
  const brands = [
    {
      name: 'Lattafa',
      logo: lattafa,
      description: 'Emirati luxury fragrances with authentic Arabian character'
    },
    {
      name: 'Arabian Oud',
      logo: 'https://i.ibb.co/LdsNy0p1/Logo-AO-WEB-TRANSPARENT-AUTHORIZED-PRO.png',
      description: 'The gold standard in traditional Arabic perfumery'
    },
    {
      name: 'Afnan',
      logo: afnan,
      description: 'Contemporary Middle Eastern fragrance house'
    },
    {
      name: 'French Avenue',
      logo: 'https://i.ibb.co/JwSZHRGZ/logo-french-avenue.png',
      description: 'Where Parisian elegance meets Arabian luxury'
    },
    {
      name: 'Amouage',
      logo: amouage,
      description: 'Omani perfumery crafting liquid art since 1983'
    },
    {
    name: 'Armaf',
      logo: armaf,
      description: 'Rare ingredients from the Sultanate of Oman'
    },
    {
      name: 'Rasasi',
      logo: rasasi,
      description: 'Modern Arabian scents by Mona Kattan'
    },
    {
        name : "Oman Luxury",
       logo: omanLuxury, 
      description: 'Rare ingredients from the Sultanate of Oman'

    },
    {
        name : "Swiss Arabian",
        logo : swissArabian,

    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-textPrimary)' }}>
            Our Prestigious Brands
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-textPrimary)' }}>
            Discover the finest Arabian perfume houses
          </p>
    
        </motion.div>

          <Swiper
          spaceBetween={25}
          slidesPerView={4}
          loop={true}
          breakpoints={{
          0: { slidesPerView: 2 },
          450: { slidesPerView: 2 },
          640: { slidesPerView: 4 }
        }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className='mx-auto w-full px-5'
          modules={[Autoplay, Navigation]}
        >
          {brands.map((brand, index) => (
            <SwiperSlide className='flex items-center justify-center w-full' key={index}>
              <motion.img
                src={brand.logo}
                alt={brand.name || "brand logo"}
                className="h-28 object-contain w-28 aspect-square mx-auto max-sm:w-40 max-sm:h-40 " 
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>






        </div>
    
    </section>
  );
};

export default BrandsShowcase;