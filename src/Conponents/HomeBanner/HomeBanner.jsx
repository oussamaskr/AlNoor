import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import videobg from "../../assets/1705055-hd_1920_1080_30fps.mp4";
import { FiArrowDownCircle } from 'react-icons/fi';

const HomeBanner = () => {
  const h1Ref = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsContainerRef = useRef(null);
  const arrowRef = useRef(null);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate the h1 text
    tl.fromTo(h1Ref.current.querySelectorAll('span'), 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 1,
        stagger: 0.05
      }
    );
    
    // Animate the subtitle
    tl.fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.35"
    );
    
    // Animate buttons - now correctly targeting both buttons
    tl.fromTo(buttonsContainerRef.current.children,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1 
      },
      "-=0.3"
    );

    // Animate the arrow
    tl.fromTo(arrowRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.2"
    );

    // Continuous bounce animation for arrow
    gsap.to(arrowRef.current, {
      y: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });
  }, []);

  // Split the h1 text into spans for character animation
  const renderAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <span  key={index} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/video-poster.jpg"
      >
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 text-white text-center">
          <h1 ref={h1Ref} className="text-5xl md:text-7xl font-elegant font-bold mb-6 max-sm:text-4xl ">
            {renderAnimatedText("The Art of Fragrance")}
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-orange-200">
          عطور الفخامة العربية

          </p>
          <div ref={buttonsContainerRef} className="flex flex-col sm:flex-row justify-center gap-4 text-lg">
            <button className="cursor-pointer px-8 py-3 bg-perfume-secondary hover:bg-perfume-dark rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Shop Women's
            </button>
            <button className="cursor-pointer px-8 py-3 bg-callAction border-2 border-white hover:bg-white/10 hover:border-highlight rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Shop Men's
            </button>
          </div>
        </div>
      </div>
      
      <div ref={arrowRef} className=" cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col gap-2 items-center">
                           <p  className='text-accent text-lg'>New Arrival</p>
        <FiArrowDownCircle size={37} className='text-textSecondary cursor-pointer' 
          onClick={()=>{
            scrollTo('new-arrival')
          }}
        
        />
      </div>
    </section>
  );
};

export default HomeBanner;