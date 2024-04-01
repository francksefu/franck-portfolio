import { useState } from "react";
import Foot from "../homes/Foot";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 }, width: 'auto' },
  hidden: { opacity: 0.1, scale: 0.1, width: 0 }
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if(menu) {
      document.querySelector('#hide-menu1').style.height = '100%';
      document.querySelector('#hide-menu').style.height = '100%';
      document.querySelector('#hide-menu1').style.transform = 'scaleY(1)';
      document.querySelector('#hide-menu').style.transform = 'scaleY(1)';
      document.querySelector('#pate').style.transform = 'scaleY(0)';
      document.querySelector('#pate').style.height = '0px';
      document.querySelector('#cross').style.transform = 'scaleY(1)';
      setMenu(!menu)
    } else {
      document.querySelector('#hide-menu1').style.height = '0px';
      document.querySelector('#hide-menu1').style.height = '0px';
      document.querySelector('#hide-menu1').style.transform = 'scaleY(0)';
      document.querySelector('#hide-menu').style.transform = 'scaleY(0)';
      document.querySelector('#pate').style.transform = 'scaleY(1)';
      document.querySelector('#cross').style.transform = 'scaleY(0)';
      setMenu(!menu)
    }
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
    <div className= {menu ? "container-fluid position-fixed bg-transparent" : "container-fluid position-fixed bg-light"}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="some text-light pt-3">Francky</h2>
          <h2 className="fontS text-white pt-3">Sefu</h2>
        </div>
        <div>
          <h1 className="text-light some" id="pate" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list some" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </h1>
          <h1 className="text-dark some" id="cross" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </h1>
        </div>
        
       
      </div>
      <div className="row" >
          <div className="col-md-6 bg-light" id="hide-menu1">
            
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
            
          </div>
          <div className="col-md-6 bg-light" id="hide-menu">
            <ul className="">
              <li className="p-3">
                <h2>Home</h2>
              </li>
              <li className="p-3">
                <h2>Works</h2>
              </li>
              <li className="p-3">
                <h2>Contacts</h2>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navbar;