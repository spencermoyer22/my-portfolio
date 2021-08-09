function Portfolio() {
    const projects = [
        { name: 'tutor-time', description: '', github: 'https://github.com/spencermoyer22/tutor-time', website: 'https://tranquil-hollows-19559.herokuapp.com/' }, 
        { name: 'portfolio', description: '', github: 'https://github.com/spencermoyer22/portfolio', website: '' }, 
        { name: 'shop-shop', description: '' }, 
        { name: 'gun-show', description: '' }, 
        { name: 'budget-tracker', description: '' }, 
        { name: 'note-taker', description: '' }
    ];

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
                        <div className='project-overlay py-3'>
                            <p style={{fontSize: 16}}>{project.name}</p>
                            <div className='d-flex justify-content-around'>
                                <button className='btn-contact btn-project'><a href={project.github} target='_blank' rel='noreferrer'>GitHub</a></button>
                                <button className='btn-contact btn-project'><a href={project.website} target='_blank' rel='noreferrer'>Website</a></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;