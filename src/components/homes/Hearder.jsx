import { motion } from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

const Header = () => {
  return (
    <div className="container-fluid header p-3">
      <div className="ps-3 ms-3">
      <motion.div
        className=""
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
         <p className="text-light pb-0 mb-0">
            I can help you build a product , feature or website
        </p>
        <h1 className="text-light mt-0 pt-0">
          I'm Franck Sefu <br/>
          I am software developer
        </h1>
      </motion.div>
       
        
      </div>
      
    </div>
  );
}

export default Header;