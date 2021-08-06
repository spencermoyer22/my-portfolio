function Contact() {

    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-lg-5 contact-section pe-0'>
                    <h1 style={{fontSize: 60}}><span className='tertiary'>Contact</span> me</h1>
                </div>
                <div className='col-5 px-0 d-none d-lg-inline'>
                    <img src={require('../../assets/images/selfie.jpeg').default} alt='me' className='w-100' />
                </div>
            </div>
        </div>
    );
};

export default Contact;