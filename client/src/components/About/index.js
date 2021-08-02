function About() {
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
                    <h2 className='text-center'>Skills</h2>
                </div>
            </div>
        </div>
    );
};

export default About;