function About() {
    
    const skills = ['JavaScript', 'NodeJS', 'Git', 'React', 'MongoDB', 'Heroku','Handlebars', 'MySQL'];

    return (
        <div className='d-flex justify-content-center mt-5 px-5'>
            <div className='mt-5'>
                <div style={{fontSize: 20}} className='' id='about-text'>
                    <h2 className='text-center'>Hello, my name is <span className='tertiary'>Spencer Moyer</span></h2>
                    <p className='my-4 text-center px-lg-5 px-0 mx-lg-5 mx-0'>
                        I am a Full-Stack Developer based in San Diego, California. I recently earned a Full Stack Web Development certificate through University of Arizona. I also graduated from Tiffin University with a Bachelor in Computer Information Systems. I am an enthusiastic developer looking to grow my skills as a young programmer.
                    </p>
                </div>
                <div>
                    <h2 className='text-center mt-5'>A few of my <span className='tertiary'>skills</span></h2>
                    <div className='d-flex flex-wrap'>
                        {skills.map((skill, i) => (
                            <div className='col-5 col-lg-2 skill mt-4 mx-auto mx-lg-5 rounded d-flex flex-column align-items-center justify-content-center'>
                                <img
                                    src={require(`../../assets/images/${i}.png`).default}
                                    alt={skill}
                                    className='skill-img my-3'
                                    style={{maxWidth: 75}}
                                />
                                <p className='tertiary'>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;