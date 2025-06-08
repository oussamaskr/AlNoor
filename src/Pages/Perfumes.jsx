import PerfumeCard from '../Conponents/PerfumeCard/PerfumeCard'

import { motion } from 'motion/react'

const Perfumes = () => {
   
return (
  <>
    <section className='relative h-[75vh] w-full  overflow-hidden max-sm:h-[100vh]'>
      {/* Background pattern */}
      <div className="shop-banner absolute inset-0 ">
<div class="background">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto h-full px-4 flex flex-col md:flex-row items-center justify-around">
        {/* Text content */}
        <div className="z-10 text-center md:text-left md:w-1/2 space-y-6 max-sm:mt-36">
          <motion.h1
          initial={{opacity:0, y:50}}
          animate={{opacity: 1 , y : 0 }}
          transition={{duration:1, delay:0.5,ease:"easeIn", type:"tween", stiffness:100 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500">
            Discover the Essence of Arabia
          </motion.h1>
          <motion.p 
            initial={{opacity:0, y:50}}
          animate={{opacity: 1 , y : 0 }}
          transition={{duration:1, delay:1 , ease:"easeOut", type:"tween", stiffness:200 }}
          className="text-lg md:text-xl text-white max-w-lg">
            Experience luxury fragrances crafted with centuries-old traditions and rare ingredients from the Middle East.
          </motion.p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.button 
                  initial={{opacity:0, scale:0}}
          animate={{opacity: 1 ,scale:1 }}
          transition={{duration:0.5, delay:1 }}
            className="bg-callAction hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Shop Now
            </motion.button>
            <motion.button 
                       initial={{opacity:0, scale:0}}
          animate={{opacity: 1 ,scale:1 }}
          transition={{duration:.5, delay:1.5 }}
            className="border-2 border-amber-700 text-amber-300  px-6 py-3 rounded-full font-medium transition-all duration-300">
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Perfume bottle image */}
        <div className="relative md:w-1/2 h-full flex items-center justify-center">
          <div className="relative w-64 h-96 md:w-80 md:h-[28rem] max-sm:h-68 pb-1">
            <img 
              src="https://fr.swissarabian.com/cdn/shop/files/SAP_Tobacco-01-Bottle_33fd9448-fd55-45b4-b9bc-93b675fabf55.webp?v=1738012212" 
              alt="Premium Arabian Perfume"
              className="absolute w-full h-full object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

    </section>
    




  <PerfumeCard/>

 


  </>
)
}

export default Perfumes
