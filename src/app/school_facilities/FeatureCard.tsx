'use client'
import { motion } from "framer-motion";

export default function FeatureCard() {
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5 }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className='mt-20'>    
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center"
        >

          {/* Card 1 */}
          <motion.div variants={item} className="group flex flex-col items-center">
            <div className="w-24 h-24 rounded-full text-3xl bg-orange-50 group-hover:bg-orange-400 duration-300 flex items-center justify-center">
              <i className="fa-solid fa-bus text-orange-500 group-hover:text-white"></i>
            </div>
            <div className="-mt-1 w-72 h-72 rounded-full bg-orange-50 group-hover:bg-orange-400 transition-colors duration-300 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-orange-500 group-hover:text-white mb-4">School Bus</h3>
              <p className="text-black group-hover:text-white leading-relaxed text-center">        
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </motion.div>


          {/* Card 2 */}
          <motion.div variants={item} className="group flex flex-col items-center">
            <div className="w-24 h-24 rounded-full text-3xl bg-green-50 group-hover:bg-green-400 duration-300 flex items-center justify-center">
              <i className="fa-solid fa-basketball text-green-500 group-hover:text-white"></i>
            </div>
            <div className="-mt-1 w-72 h-72 rounded-full bg-green-50 group-hover:bg-green-400 transition-colors duration-300 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-green-500 group-hover:text-white mb-4">Playground</h3>
              <p className="text-black group-hover:text-white leading-relaxed text-center">        
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </motion.div>


          {/* Card 3 */}
          <motion.div variants={item} className="group flex flex-col items-center">
            <div className="w-24 h-24 rounded-full text-3xl bg-yellow-50 group-hover:bg-yellow-400 duration-300 flex items-center justify-center">
              <i className="fa-solid fa-house text-yellow-500 group-hover:text-white"></i>
            </div>
            <div className="-mt-1 w-72 h-72 rounded-full bg-yellow-50 group-hover:bg-yellow-400 transition-colors duration-300 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-yellow-500 group-hover:text-white mb-4">Healthy Canteen</h3>
              <p className="text-black group-hover:text-white leading-relaxed text-center">        
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={item} className="group flex flex-col items-center">
            <div className="w-24 h-24 rounded-full text-3xl bg-blue-50 group-hover:bg-blue-400 duration-300 flex items-center justify-center">
              <i className="fa-solid fa-chalkboard text-blue-500 group-hover:text-white"></i>
            </div>
            <div className="-mt-1 w-72 h-72 rounded-full bg-blue-50 group-hover:bg-blue-400 transition-colors duration-300 flex flex-col items-center justify-center px-6">
              <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white mb-4">Positive Learning</h3>
              <p className="text-black group-hover:text-white leading-relaxed text-center">        
                Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}