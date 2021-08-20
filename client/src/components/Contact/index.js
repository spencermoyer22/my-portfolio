function Contact() {

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-xl-5 contact-section px-4 py-4 pt-xl-5'>
                    <h2 style={{ fontSize: 60 }}><span className='tertiary'>Contact</span> me</h2>
                    <p style={{ fontSize: 22 }} className='mt-3 mt-xlg-5'>If you are interested in my work or just want to chat I encourage you to reach out. You can email me at the link below.</p>
                    <a href="mailto:spencer.moyer16@yahoo.com" className='text-decoration-none tertiary middle' style={{ fontSize: 25 }}>spencer.moyer16@gmail.com</a>
                    <h2 style={{ fontSize: 60 }} className='mt-4 mt-xxl-5'><span className='tertiary'>Follow</span> me</h2>
                    <p style={{ fontSize: 22 }} className='my-5'>Follow me on my LinkedIn, Twitter, and Github at the links below.</p>
                    <a className='btn-contact btn-project text-decoration-none px-5 py-3' href="https://www.linkedin.com/in/spencer-moyer-08b347133/" target="_blank" rel='noreferrer'><img src={require("../../assets/images/linkedin-logo.png").default} alt="LinkedIn logo" style={{ height: 25 }} /></a>
                    <a className='btn-contact btn-project text-decoration-none px-5 py-3' href="https://twitter.com/spencer_moyer22" target="_blank" rel='noreferrer'><img src={require('../../assets/images/twitter-logo.png').default} alt="Twitter logo" style={{ height: 25 }} /></a>
                    <a className='btn-contact btn-project text-decoration-none px-5 py-3' href="https://github.com/spencermoyer22" target="_blank" rel='noreferrer'><img src={require('../../assets/images/github-logo.png').default} alt="GitHub logo" style={{ height: 25 }} /></a>
                </div>
                <div className='col-5 px-0 d-none d-xl-inline'>
                    <img src={require('../../assets/images/selfie.jpeg').default} alt='me' className='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Contact;