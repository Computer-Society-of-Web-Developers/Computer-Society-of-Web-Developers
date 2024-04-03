import React from 'react';
import NetworkSecure from '@/components/NetworkSecure';
import Image from 'next/image';
import { motion } from 'framer-motion';
import about from '@/app/Images/5.png';

const About = () => {
  return (
    <NetworkSecure
      element={
        <motion.div
          className='w-full h-full bg-[#1A2529] flex flex-col'
          whileHover={{ opacity: 1, y: 0 }}
        >
          {/* Title */}
          <div className='w-full flex justify-center items-center my-5 py-6'>
            <span className='text-4xl md:text-5xl font-extrabold text-white '>
              About Us
            </span>
          </div>
          {/* Content */}
          <div className='flex-1 flex flex-col justify-start md:flex-row'>
            {/* Left column (Image) */}
            <div className='w-full md:w-1/2 flex justify-center items-center'>
              <motion.div
                className='contact-image-container'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={about} width={450} height={450} />
              </motion.div>
            </div>
            {/* Right column (Text) */}
            <div className='w-full md:w-1/2 mb-6 flex flex-col justify-center items-center'>
              <div className='max-w-md px-4 text-center'>
                <div className='text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#49B5C0] mb-4'>
                  MISSION
                </div>
                <div className='text-white text-lg mb-6'>
                  To foster a collaborative and inclusive community of web
                  developers and networking opportunities to empower members
                  and excel in the ever-evolving digital landscape.
                </div>
                <div className='text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-[#49B5C0] mb-4'>
                  VISION
                </div>
                <div className='text-white text-lg '>
                  To be a leading catalyst for innovation and excellence in web
                  development, where individuals of all backgrounds come
                  together to learn, create, and inspire, shaping the future
                  of technology.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      }
    />
  );
};

export default About;
