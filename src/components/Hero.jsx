import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero bg-black min-h-screen sm:mt-[18px] flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* 3D Image Effect */}
        <motion.img
          src="/src/assets/image1.png"
          alt="Gym Workout"
          className="w-[81vh] h-[90vh] sm:w-[74vh] sm:h-[114vh] rounded-lg shadow-2xl z-10"
          initial={{ scale: 0.8, rotateY: 20, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotateY: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        />
        <div>
          <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
