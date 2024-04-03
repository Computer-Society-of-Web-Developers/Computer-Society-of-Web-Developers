// gsapScript.js
import gsap from 'gsap';

const animateElements = () => {
  // Your GSAP animations here
  const tl = gsap.timeline()
  tl.from('#logo', {
  
    scale:1,
                        opacity:0,
                        delay:1.3,
                        duration:0.3,
  });
};

export default animateElements;
