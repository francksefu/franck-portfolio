
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { projects } from '../homes/projects';
import Navbar from "../Navbar/Navbar";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

const Project = () => {
  const control = useAnimation();
  const control2 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const projet = projects[JSON.parse(localStorage.getItem("current_work"))];
  useEffect(() => {
    if (inView1) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [ inView1]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }
  }, [ inView2]);
  return(
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 header text-white">
          <motion.div
            className=""
            variants={boxVariant}
            initial="hidden"
            animate="visible"
          >
            <h1>{projet.name}</h1>
          </motion.div>
           
          </div>
          <div className="col-md-6 black">
            <img
              className='img-fluid pb-1'
              src={projet.projectPicture[0]}
            />
            <img
              className='img-fluid no-desk'
              src={projet.projectPicture[1]}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-3 p-3">
          <div className="col-md-2"> </div>
          <div className="col-md-8 mt-3 p-3">
          <motion.div
            className=""
            ref={ref1}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <p className="p-3">
              {projet.description}
            </p>
            <div className="flex-grid justify-content-center">
              {projet.languages.map((language) => (
                <button className="btn btn-light m-3 text-success" key={language}>{language}</button>
              ))}
            </div>
            <div className="flex-grid-link justify-content-center">
              <a href={projet.gitUrl.frontEnd} target='_blank' className='btn btn-dark m-3'>View code</a>
              <a href={projet.productionUrl} target='_blank' className='btn btn-dark m-3'>Live preview</a>
              {projet.videoUrl == '' ? null : (<a href={projet.videoUrl} target='_blank' className='btn btn-dark m-3'>Video link</a>)}
            </div>
            </motion.div>
          </div>
          <div className="col-md-2"> </div>
        </div>
      
      </div>
      <div className="container-fluid black text-white">
        <motion.div
          className=""
          ref={ref2}
          variants={boxVariant}
          initial="hidden"
          animate={control2}
          >
        <h2 className="text-center p-3">Mobile first Design</h2>
        <div className="row">
          <div className="col-md-2"> </div>
          <div className="col-md-8 row p-0">
            <img
              className="img-fluid col-md-5 pt-3 shadow"
              src={projet.projectPicture[2]}
            />
            <div className="col-md-2"> </div>
            <img
              className="img-fluid col-md-5 pt-3 shadow"
              src={projet.projectPicture[3]}
            />
          </div>
          <div className="col-md-2"> </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-2'> </div>
          <div className='col-md-8'>
            <img
              className="img-fluid"
              src={projet.projectPicture[4]}
            />
          </div>
          <div className='col-md-2'> </div>
        </div>
        </motion.div>
      </div>
    </>
   
  );
}

export default Project;