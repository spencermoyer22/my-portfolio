function About() {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-8 d-flex container flex-wrap'>
                <div className=''>
                    <img 
                    src={require('../../assets/images/selfie.jpeg').default}
                    alt='me'
                    style={{height: 300}}
                    className='rounded me-5'
                ></img>
                </div>
                <div style={{fontSize: 20}} className='text-start ml-5 col-lg-6 col-sm-12'>
                    <p className='mb-4'>
                        Hello, I'm Spencer! I am a Full-Stack Developer who loves learning and challenging myself daily. I have most recently been developing my skills in the MERN stack. I have received my Full Stack Wev Development Certificate from the University of Arizona's bootcamp program. Before that I finished a Bachelor's degree in Computer Information Systems with a concentration in software development as well. Programming has been a passion of mine for the last few years, and I am excited to keep learning more. When I'm not studying web development I am usually out somewhere being active. Whether it involves sports, hiking, or just going on walks around the beach I love getting up and moving!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;