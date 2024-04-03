import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [menuBg, setMenuBg] = useState('container-fluid position-fixed bg-transparent')
  const handleMenu = () => {
    if(menu) {
      document.querySelector('#hide-menu1').style.height = '100%';
      document.querySelector('#hide-menu').style.height = '100%';
      document.querySelector('#hide-menu1').style.transform = 'scaleY(1)';
      document.querySelector('#hide-menu').style.transform = 'scaleY(1)';
      document.querySelector('#pate').style.transform = 'scaleY(0)';
      document.querySelector('#pate').style.height = '0px';
      document.querySelector('#cross').style.transform = 'scaleY(1)';
      setMenuBg('container-fluid position-fixed bg-light');
    } else {
      document.querySelector('#hide-menu1').style.height = '0px';
      document.querySelector('#hide-menu1').style.height = '0px';
      document.querySelector('#hide-menu1').style.transform = 'scaleY(0)';
      document.querySelector('#hide-menu').style.transform = 'scaleY(0)';
      document.querySelector('#pate').style.transform = 'scaleY(1)';
      document.querySelector('#cross').style.transform = 'scaleY(0)';
      setMenuBg('container-fluid position-fixed bg-transparent');
    }
    setMenu(!menu)
  }

  return(
    <div className= {menuBg}>
      <div className="d-flex justify-content-between">
        <Link to='/' className="d-flex">
          <h2 className={menu ? (location.pathname == '/contact' ? "some text-dark pt-3" : "some text-light pt-3") : "some text-dark pt-3"}>Francky</h2>
          <h2 className={menu? (location.pathname == '/contact' ? "fontS text-dark pt-3" : "fontS text-light pt-3")  : "fontS text-dark pt-3"}>Sefu</h2>
        </Link>
        <div>
          <h1 className="text-light cursor some" id="pate" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list some" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </h1>
          <h1 className="text-dark some cursor" id="cross" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </h1>
        </div>
        
       
      </div>
      <div className="row" >
          <div className="col-md-6 bg-light" id="hide-menu1">
            
            <div className="d-flex justify-content-between">
              <div className="p-3 col-md-7 no-desk">
                <h6 className="mt-3 mb-3 pt-3 pb-3 ps-3 ms-3">GET IN TOUCH</h6>
                <h2 className="mt-3 mb-3 pt-3 pb-3 ps-3 ms-3">francksefu1998@gmail.com</h2>
                <div className="d-flex mt-3 p-3">
                <a href="https://medium.com/@francksefu1998" className="link_a" target="_blank"><h6 className="p-3 beige">MEDIUM</h6></a>
                <a href="https://www.linkedin.com/in/franck-sefu/" className="link_a" target="_blank"><h6 className="p-3 beige">LINKEDIN</h6></a>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="col-md-6 bg-light" id="hide-menu">
            <ul className="">
              <li className="p-3" onClick={() => setMenu(false)}>
                <Link to="/"><h2>Home</h2></Link>
              </li>
              
              <li className="p-3" onClick={() => setMenu(false)}>
                <Link to="/contact"><h2>Contacts</h2></Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navbar;