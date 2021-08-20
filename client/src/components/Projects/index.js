function Projects() {
    const projects = [
        { name: 'tutor-time', description: 'Full Stack MERN site to find tutors based on subject. Bcrypt and JSON Web Tokens verify users and information. Apollo Client/Server and GraphQL are used to write and test queries and mutations. Deployed to Heroku.', github: 'https://github.com/spencermoyer22/tutor-time', website: 'https://tranquil-hollows-19559.herokuapp.com/' }, 
        { name: 'portfolio', description: 'Front end React app created to build myself a portfolio site. Used React, JSX, and CSS to create display and animations. Deployed to GitHub pages.', github: 'https://github.com/spencermoyer22/portfolio', website: 'https://spencermoyer22.github.io/portfolio/' }, 
        { name: 'shop-shop', description: 'Full Stack MERN e-commerce site. Converted the project from prop drilling to global state management using Redux. Implemented a test Stripe program for payment method. Deployed to Heroku.', github: 'https://github.com/spencermoyer22/shop-shop', website: 'https://sheltered-dusk-84272.herokuapp.com/' }, 
        { name: 'gun-show', description: ' Health based social media account using MVC architecture. Handlebars create the front end. MySQL and Sequelize make up the back end. Uses express to create API routes. Deployed to Heroku.', github: 'https://github.com/spencermoyer22/JustTechGunShow', website: 'https://thawing-plains-49978.herokuapp.com/' }, 
        { name: 'budget-tracker', description: 'Created a Progressive Web Application to track a budget. Uses IndexedDb and Service Workers to function offline and save information to MongoDB when back online. Uses manifest to download site as an application. Deployed to Heroku.', github: 'https://github.com/spencermoyer22/budget-tracker', website: 'https://obscure-journey-56604.herokuapp.com/' }, 
        { name: 'note-taker', description: 'Simple note taking app using Express, Node.js and JavaScript to save notes and perform CRUD operations. Deployed to Heroku.', github: 'https://github.com/spencermoyer22/note-taker', website: 'https://rocky-springs-14001.herokuapp.com/notes' }
    ];

    return (
        <div className='container text-center mx-0 px-4'>
            <h2 className='mt-5'>Recent Work</h2>
            <p style={{ fontSize: 20 }}>Here are some projects I have worked on recently</p>
            <div className='row mt-5'>
                {projects.map((project) => (
                    <div className='project mx-auto col-xl-4 col-lg-6 col-sm-12 p-0 m-0' style={{position: 'relative'}}>
                        <img
                            src={require(`../../assets/images/${project.name}-min.png`).default}
                            alt={project.name}
                            className='mx-auto project-img'
                        ></img>
                        <div className='project-overlay py-2 py-md-4'>
                            <p style={{fontSize: 16}} className='text-start px-4'>{project.description}</p>
                            <div className='d-flex justify-content-around'>
                                <a className='btn-contact btn-project text-decoration-none px-2' href={project.github} target='_blank' rel='noreferrer'>GitHub</a>
                                <a className='btn-contact btn-project text-decoration-none px-2' href={project.website} target='_blank' rel='noreferrer'>Website</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;