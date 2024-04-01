import Ruby from '../../assets/images/ruby.jpg';
import RSpec from '../../assets/images/RSpec.png'
import Capybara from '../../assets/images/capybara.png';
import Selenium from '../../assets/images/selenium.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.2, scale: 0.5 }
};

const Stack = () => {
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
    <div className="container-fluid p-3 font-beige">
      <motion.div
         className=""
         ref={ref1}
         variants={boxVariant}
         initial="hidden"
         animate={control}
      >
      <div className="row">
        <div className="col-md-2"> </div>
        <div  className="col-md-8  border-start rounded d-flex flex-row bd-highlight mb-3 justify-content-between">
          <div className="" style={{verticalAlign: 'center'}}>
            <h2> Languages</h2>
          </div>
          <div className=" d-flex">
            <div className="p-3">
              <i class="fa-brands fa-html5 text-danger"></i>
              <h6>Html5</h6>
            </div>

            <div className="p-3">
              <i className="fa-brands fa-css3 text-success"></i>
              <h6>Css3</h6>
            </div>

            <div className="p-3">
              <img
                width="50"
                height="50"
                src={Ruby}
                className=""
              />
              <h6>Ruby</h6>
            </div>

            <div className="p-2">
              <i class="fa-brands fa-js text-warning"></i>
              <h6>JavaScript</h6>
            </div>
          </div>

            
        </div>
        <div className="col-md-2"> </div>
      </div>
      <div className="row">
        <div className="col-md-2"> </div>
        <div  className="col-md-8  border-start rounded d-flex flex-row bd-highlight mb-3 justify-content-between">
          <div className="" style={{verticalAlign: 'center'}}>
            <h2>Framework</h2>
          </div>
          <div className=" d-flex">
            <div className="p-3">
              <i class="fa-brands fa-react text-primary"></i>
              <h6>React</h6>
            </div>

            <div className="p-3">
            <i class="fa-brands fa-bootstrap text-primary"></i>
              <h6>Bootstrap</h6>
            </div>

            <div className="p-3">
              <img
                width="50"
                height="50"
                src={Ruby}
                className=""
              />
              <h6>Ruby on Rails</h6>
            </div>

            <div className="p-3">
              <img
                width="50"
                height="50"
                src={RSpec}
                className=""
              />
              <h6>RSpec</h6>
            </div>

            <div className="p-3">
              <img
                width="50"
                height="50"
                src={Capybara}
                className=""
              />
              <h6>capybara</h6>
            </div>

            <div className="p-3">
              <img
                width="50"
                height="50"
                src={Selenium}
                className=""
              />
              <h6>Selenium</h6>
            </div>
          </div>
           
        </div>
        <div className="col-md-2"> </div>
      </div>

      <div className="row">
        <div className="col-md-2"> </div>
        <div  className="col-md-8  border-start rounded d-flex flex-row bd-highlight mb-3 justify-content-between">
          <div className="" style={{verticalAlign: 'center'}}>
            <h2>Skills</h2>
          </div>
          <div className=" d-flex">
            <div className="p-3">
              <i class="fa-brands fa-git"></i>
              <h6>git</h6>
            </div>

            <div className="p-3">
              <i class="fa-brands fa-github text-secondary"></i>
              <h6>gitHub</h6>
            </div>

            <div className="p-3">
              <i class="fa-solid fa-terminal"></i>
              <h6>Terminal</h6>
            </div>

            <div className="p-3">
              <i class="fa-brands fa-codepen text-primary"></i>
              <h6>code pen</h6>
            </div>

          </div>
            
        </div>
        <div className="col-md-2"> </div>
      </div>
      </motion.div>
    </div>
  );
}

export default Stack;