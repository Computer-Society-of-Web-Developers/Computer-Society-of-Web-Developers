import React from 'react';
import Image from 'next/image';
import cswdlogo from '@/app/Images/cswdlogo.jpg';
import heroimage from '@/app/Images/heroimage3.png';
import herodown from '@/app/Images/hero down.png';
import heroup from '@/app/Images/hero upper.png';
import NetworkSecure from '@/components/NetworkSecure';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <NetworkSecure
      element={
        <div className='bg-[#1A2529] w-full h-screen flex flex-wrap'>
          <Image
            className='absolute right-0'
            src={heroup}
            alt='Upper SVG'
            width={1200}
            height={1200}
          />

          {/* Left side */}
          <div className='w-full flex flex-col justify-between sm:w-1/2 sm:h-full'>
            <div className='w-full h-1/2 sm:mr-6 sm:h-1/4 flex justify-center items-center gap-6'>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Image
                  className='rounded-full ml-3'
                  src={cswdlogo}
                  alt='CSWD Logo'
                  width={90}
                  height={90}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className='text-[#E1D9D1] font-light text-xl sm:text-2xl'>
                Computer Society Of Web Developers
              </motion.div>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='w-4/5 sm:px-24 flex flex-col justify-center items-center h-full'
              >
                <h1 className='text text-5xl sm:text-xl md:text-7xl font-semibold text-white mb-3'>
                  <span className="block sm:inline">Join Our</span><span className="block sm:inline">  Society...</span>
                </h1>
                <h1 className='text-lg md:text-xl text-white mb-6 sm:-ml-24'>
                  Building The Digital Future Together
                </h1>
                <Link href={'/apply'} className='mx-auto py-3 sm:mt-5 sm:ml-0 z-10 w-4/5'>
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className='mx-auto sm:mt-5 sm:ml-0 text-md text-white font-bold border border-solid border-white w-4/5 py-3 sm:w-44 rounded-full bg-[#49B5C0] hover:bg-[#3c97a1]'
                  >
                    APPLY
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right side */}
          <div className='w-full sm:w-1/2 sm:h-full flex items-center justify-center'>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className='w-full contain h-full flex items-center'
            >
              <Image src={heroimage} alt='Right SVG' width={700} height={700} />
            </motion.div>
          </div>
          <Image
            className='absolute bottom-0'
            src={herodown}
            alt='Bottom SVG'
            width={1200}
            height={1200}
          />
        </div>
      }
    />
  );
};

export default HeroSection;
