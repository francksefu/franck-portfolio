const Work = ({projects}) => {
  
  return(
    <div className="container-fluid p-3 font-black text-light">
      <div className="mt-3 mb-3 pt-3 ms-3">
        <p className="mt-3 pt-3 ms-3">
          EXPLORE RECENT WORK
        </p>
        <h1 className="mt-0 ms-3 p-0">Selected Works</h1>
      </div>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.name} className={project.id % 2 != 0 && 'pad-img'}>
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

    </div>
  );
}

export default Work;