import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import contact from '@/app/Images/contact.png';
import NetworkSecure from '@/components/NetworkSecure';
import Link from 'next/link';

const Contact = () => {
  return (
    <NetworkSecure
      element={
        <motion.div
          whileHover={{ opacity: 1, y: 0 }}
          className='w-full min-h-screen bg-[#1A2529] flex flex-col'>
          <div className='w-full h-1/6 flex justify-center my-5 items-center'>
            <span className='text-4xl md:text-5xl  mt-6 font-extrabold text-white border-b-red-solid-2'>Contact Us</span>
          </div>
          <div className='flex-1 flex  flex-wrap'>
            {/* Left column */}
            <div className='w-full md:w-2/3 flex justify-center items-center'>
              <motion.div
                whileHover={{ opacity: 1, y: 0 }} // Animation runs on hover
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='contact-image'
              >
                <Image
                  alt='Contact Us'
                  src={contact}
                  width={560}
                  height={560}
                  className='mobile-image' // Add a class for mobile image styling
                />
              </motion.div>
            </div>
            {/* Right column */}
            <div className='w-full md:w-1/3 flex justify-center items-center'>
              <div className='w-5/6'>
                <div className='text-2xl md:text-3xl font-bold text-[#49B5C0]'>ADDRESS</div>
                <p className='text-lg md:text-xl py-3  text-white'>Meerut Institute of Engineering and Technology, Meerut, Uttar Pradesh</p><br />
                <div className='text-2xl md:text-3xl font-bold text-[#49B5C0]'>EMAIL</div>
                <p className='text-lg md:text-xl py-3  text-white email-container'>info.cswd.miet@gmail.com</p><br />
                <div className='text-2xl md:text-3xl font-bold text-[#49B5C0]'>SOCIAL</div>
                <div className='flex justify-start py-3  gap-4'>
                  <FaInstagram className='text-white hover:text-zinc-300' size={32} />
                  <FaLinkedinIn className='text-white hover:text-zinc-300' size={32} />
                  <IoLogoYoutube className='text-white hover:text-zinc-300' size={32} />
                </div><br />
                <Link href='mailto:info.cswd.miet@gmail.com'>
                  <button
                    className='text-md md:text-lg border border-solid border-white text-white ml-2 w-5/6 md:w-64 rounded-full py-3 mt-3 bg-[#49B5C0] hover:bg-[#3c97a1]'
                  >
                    ASK A QUERY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      }
    />
  );
};

export default Contact;
