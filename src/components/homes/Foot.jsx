import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.1, scale: 0.1 }
};

const Foot = () => {
  const control = useAnimation();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView1) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView1]);
  return(
    
    <div className="container-fluid bg-dark text-white">
      <motion.div
         className=""
         ref={ref1}
         variants={boxVariant}
         initial="hidden"
         animate={control}
      >
      <div className="d-flex justify-content-between">
        <div className="p-3 col-md-7">
          <h6 className="mt-3 mb-3 pt-3 pb-3 ps-3 ms-3">GET IN TOUCH</h6>
          <h2 className="mt-3 mb-3 pt-3 pb-3 ps-3 ms-3">francksefu1998@gmail.com</h2>
          <div className="d-flex mt-3 p-3">
            <h6 className="p-3 beige">DRIBBLE</h6>
            <h6 className="p-3 beige">LINKEDIN</h6>
          </div>
        </div>
        
      </div>
      </motion.div>
    </div>
  );
}

export default Foot;