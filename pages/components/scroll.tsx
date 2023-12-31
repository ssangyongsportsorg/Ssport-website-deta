import React from "react";
// Import motion and useScroll from Framer Motion.
import { motion, useScroll } from "framer-motion";
const Scroll = () => {
  // useScroll hook from framer JS AND By default, useScroll tracks the page scroll
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/** The core of Motion is the motion component. Think of it as a plain HTML or SVG element, supercharged with animation capabilities. */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};
export default Scroll;
