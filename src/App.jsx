import './App.css'
import Description from './components/homes/Description'
import Foot from './components/homes/Foot'
import Header from './components/homes/Hearder'
import Stack from './components/homes/Stack'
import Work from './components/homes/Work'
import { projects } from './components/homes/projects'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

const boxVariant1 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2 }
};

const boxVariant2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant3 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

function App() {

  const control = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView1) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView1]);

  useEffect(() => {
    if (inView2) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView2]);

  useEffect(() => {
    if (inView3) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView3]);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView]);

  return (
    <>
     
     
     <Header />

      <motion.div
        className=""
        ref={ref1}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Description />
      </motion.div>

      <Work projects={projects}/>
      <Stack />
      <Foot />
      
    </>
  )
}

export default App
