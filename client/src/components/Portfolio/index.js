function Portfolio() {
    const projects = [{ name: 'tutor-time' }, { name: 'gun-show' }, { name: 'event-finder' }, { name: 'run-buddy' }, { name: 'random1' }, { name: 'random2' }];

    return (
        <div className='container text-center mx-0 px-4'>
            <h2 className='mt-5'>Recent Work</h2>
            <p style={{ fontSize: 20 }}>Here are some projects I have worked on recently</p>
            <div className='row mt-5'>
                {projects.map((project) => (
                    <div className='project mx-auto col-xl-4 col-lg-6 col-sm-12 p-0 m-0' style={{position: 'relative'}}>
                        <img
                            src={require(`../../assets/images/${project.name}.png`).default}
                            alt={project.name}
                            className='mx-auto project-img'
                        ></img>
                        <div className='project-overlay'>
                            <p>{project.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;