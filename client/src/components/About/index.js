function About() {
    
    const skills = ['JavaScript', 'NodeJS', 'Git', 'React', 'MongoDB', 'Heroku','Handlebars', 'MySQL'];

    return (
        <div className='d-flex justify-content-center mt-5 px-5'>
            <div className='mt-5'>
                <div style={{fontSize: 20}} className='' id='about-text'>
                    <h2 className='text-center'>Hello, my name is Spencer Moyer</h2>
                    <p className='my-4 text-start px-5'>
                        I am a Full-Stack Developer based in San Diego, California. I recently earned a Full Stack Web Development certificate through University of Arizona. I also graduated from Tiffin University with a Bachelor's in Computer Information Systems. I am an enthusiastic developer looking to grow my skills as a young programmer.
                    </p>
                    <p className='my-4 text-start px-5'>
                        Some other things I enjoy when I am not coding
                        <ul className='mt-3'>
                            <li>
                                Working Out
                            </li>
                            <li>
                                Playing video games
                            </li>
                            <li>
                                Traveling
                            </li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2 className='text-center'>Some Skills I Use</h2>
                    <div className='skills-container container d-flex flex-wrap'>
                        {skills.map((skill, i) => (
                            <div className='col-2 skill mt-5 mx-5 rounded d-flex justify-content-center'>
                                <img
                                    src={require(`../../assets/images/${i}.png`).default}
                                    alt={skill}
                                    className='skill-img my-3'
                                    style={{maxWidth: 75}}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;