import Projet1 from '../../assets/images/kiko1.png';
import Projet2 from '../../assets/images/projet2.png';
import Projet3 from '../../assets/images/projet3.png';
import Projet4 from '../../assets/images/project4.png';
const Work = () => {
  return(
    <div className="container-fluid p-3 font-black text-light">
      <div className="mt-3 mb-3 pt-3 ms-3">
        <p className="mt-3 pt-3 ms-3">
          EXPLORE RECENT WORK
        </p>
        <h1 className="mt-0 ms-3 p-0">Selected Works</h1>
      </div>
      <div className="grid">
        <img
          className="img-fluid rounde pad"
          src={Projet1}
        />
        <img
          className="img-fluid rounde"
          src={Projet2}
        />
        <img
          className="img-fluid pad"
          src={Projet3}
        />
        <img
          className="img-fluid"
          src={Projet4}
        />
      </div>

    </div>
  );
}

export default Work;