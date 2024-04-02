import Big1 from '../../assets/images/kikofond2.png';
import Big from '../../assets/images/kikofond1.png';
import Kiko1 from '../../assets/images/kikophone1.png';
import Kiko2 from '../../assets/images/kikophone2.png';
import Carmen from '../../assets/images/kikocarmen.png';
const Project = () => {
  return(
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 header text-white">
            <h1>Project name</h1>
          </div>
          <div className="col-md-6 font-beige">
            <img
              className='img-fluid pb-1'
              src={Big1}
            />
            <img
              className='img-fluid'
              src={Big}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-3 p-3">
          <div className="col-md-2"> </div>
          <div className="col-md-8 mt-3 p-3">
            <p className="p-3">
              descrition of project
              L Avent vous enseigne a accepter la souffrance dans la chair. Vous ne pouvez pas penser que la communauté doit vous rendre heureux  et rien d autre. Le seigneur vient revenu de majesté . Et il vous fera voir vos oeuvres. Il dit que les chrétiens sont suivis par leurs oeuvres.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-light m-3 text-success">Html5</button>
              <button className="btn btn-light m-3 text-success"> CSS3</button>
              <button className="btn btn-light m-3 text-success"> JavaScript</button>
              <button className="btn btn-light m-3 text-success"> PHP </button>
            </div>
            <div className="d-flex justify-content-center">
              <a href='#' target='_blank' className='btn btn-dark m-3'>Source code</a>
              <a href='#' target='_blank' className='btn btn-dark m-3'>Preview link</a>
              <a href='#' target='_blank' className='btn btn-dark m-3'>Video link</a>
            </div>
          </div>
          <div className="col-md-2"> </div>
        </div>
       
      </div>
      <div className="container-fluid black text-white p-3">
        <h2 className="text-center p-3">Mobile first Design</h2>
        <div className="row">
          <div className="col-md-2"> </div>
          <div className="col-md-8 row">
            <img
              className="img-fluid col-md-5"
              src={Kiko1}
            />
            <div className="col-md-2"> </div>
            <img
              className="img-fluid col-md-5"
              src={Kiko2}
            />
          </div>
          <div className="col-md-2"> </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-2'> </div>
          <div className='col-md-8'>
            <img
              className="img-fluid"
              src={Carmen}
            />
          </div>
          <div className='col-md-2'> </div>
        </div>
      </div>
    </>
   
  );
}

export default Project;