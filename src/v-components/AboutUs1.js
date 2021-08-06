import ab1 from "../imgs/ab1.jpg";
//Importing styled
import styled from "styled-components";
//importing animation tool
import { motion } from "framer-motion";
const AboutUs1 = () => {
  const tilteAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.75 } },
  };
  const parentContainer = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1, staggerChildren: 1 } },
  };
  return (
    <About1>
      <motion.div
        variants={parentContainer}
        animate="show"
        initial="hidden"
        className="description"
      >
        <section className="title">
          <motion.h2 variants={tilteAnim}>You can watch</motion.h2>
          <motion.h2 variants={tilteAnim}>
            and <span>Search</span> movies
          </motion.h2>
          <motion.h2 variants={tilteAnim}>here</motion.h2>
        </section>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          Lorem, ipsum dolor. <br /> sit amet consectetur.
        </p>
        <button>Contact Us</button>
      </motion.div>
      <div className="image">
        <img src={ab1} alt="fsfs" />
      </div>
    </About1>
  );
};
const About1 = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-space-evenly;
  color: white;
  @media screen and (max-width: 1190px) {
    display: inline-block;
    img {
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: -4;
    }
  }
`;
export default AboutUs1;
