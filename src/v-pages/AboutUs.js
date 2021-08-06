//Importing Components
import AboutUs1 from "../v-components/AboutUs1";
import AboutUs2 from "../v-components/AboutUs2";
import AboutUs3 from "../v-components/AboutUs3";
//Importing styled
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../v-components/animation";
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <AboutUs1 />
      <AboutUs2 />
      <AboutUs3 />
    </motion.div>
  );
};
export default AboutUs;
