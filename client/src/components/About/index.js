function About() {
    return (
        <div className='d-flex mt-5 flex-wrap'>
             <div className='col-5'>
                <img 
                    src={require('../../assets/images/selfie.jpeg').default}
                    alt='Photo of me'
                    style={{height: 300}}
                ></img>
            </div>
            <div className='col-5' style={{fontSize: 20}}>
                <p className='mb-4'>
                    Hello, I'm Spencer! I am a Full-Stack Developer who loves learning and challenging myself daily. I have most recently been developing my skills in the MERN stack.
                </p>
                <p>
                    When I'm not studying web development I am usually out somehwere being active. As you might be able to tell I played college football, buy whether it involves sports, hiking, or just going on walks around the beach I love getting up and moving!
                </p>
            </div>
        </div>
    );
};

export default About;