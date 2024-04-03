import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

const Work = ({projects}) => {
  let navigate = useNavigate();
  const handleClick = (value) => {
    localStorage.setItem("current_work", JSON.stringify(value));
    navigate('/project');
  }
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
    <div className="container-fluid p-3 font-black text-light">
      <motion.div
         className=""
         ref={ref1}
         variants={boxVariant}
         initial="hidden"
         animate={control}
      >
        <div className="mt-3 mb-3 pt-3 ms-3">
          <p className="mt-3 pt-3 ms-3">
            EXPLORE RECENT WORK
          </p>
          <h1 className="mt-0 ms-3 p-0">Selected Works</h1>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <div key={project.name} className={project.id % 2 != 0 ? 'cursor' : 'pad-img cursor'} onClick={() => handleClick(projects.indexOf(project))}>
              <img
                className="img-fluid rounde pad"
                src={project.imageUrl}
                alt={project.name}
              />
              <h2 className="text-white ps-3">{project.name}</h2>
              <p className="ps-3">
                {project.type}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      

    </div>
  );
}

export default Work;