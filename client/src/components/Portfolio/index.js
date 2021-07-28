function Portfolio() {
    const projects = [{name: 'tutor-time'}, {name: 'gun-show'}, {name: 'event-finder'}, {name: 'run-buddy'}, {name: 'random1'}, {name: 'random2'}];

    return (
        <div className='container text-center'>
            <h2 className='mt-5'>Recent Work</h2>
            <p style={{fontSize: 20}}>Here are some projects I have worked on recently</p>
            <div className='row mt-5'>
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