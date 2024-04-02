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
import Navbar from './components/Navbar/Navbar'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

function App() {

  const control = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView1]);

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
      
    </>
  )
}

export default App
