function Portfolio() {
    const projects = [{name: 'gun-show'}, {name: 'event-finder'}, {name: 'run-buddy'}, {name: 'random1'}, {name: 'random2'}, {name: 'random3'}];

    return (
        <div className='container'>
            <h2 className='my-3'>Portfolio</h2>
            <div className='row '>
                {projects.map((project) => (
                    <img 
                    src={require(`../../assets/images/${project.name}.png`).default}
                    style={{height: 300}}
                    alt={project.name}
                    className='mx-auto col-lg-4 col-md-6 col-sm-12 my-2'
                ></img>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;