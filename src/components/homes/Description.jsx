import ImageFranck from '../../assets/images/moi.png';

const Description = () => {
  return(
    <div className="container-fluid p-3">
      <div className="row pt-3 pb-3">
        <div className="col-md-2 "> </div>
        <div className="col-md-8 row p-3 mt-3 mb-3">
          <p className="border-start col-md-8">
          Allow me to introduce myself—I am Franck, a passionate full-stack 
          developer with a penchant for turning ideas into elegant digital solutions.
          My journey in the realm of web development has been nothing short of 
          exhilarating, and today, I stand before you armed with the power of React 
          on the front end and the robustness of Ruby on Rails on the backend.
          </p>
          <img
            className="col-md-4 img-fluid img-b rounde p-0"
            src={ImageFranck}
          />
        </div>
        <div className="col-md-2"> </div>
      </div>
    </div>
  );
}

export default Description;