function Footer() {
    return (
        <footer className='mt-5 pt-3 d-flex flex-wrap justify-content-center align-items-center'>
            <p>
                Copyright &copy; 2021 Spencer Moyer
            </p>
            <ul style={{ listStyle: 'none' }} className='d-flex justify-content-center px-4'>
                <li className='mx-3'>
                    <a href="https://www.linkedin.com/in/spencer-moyer-08b347133/" className='grow' target="_blank" rel='noreferrer'><img src={require("../../assets/images/linkedin-logo.png").default} alt="LinkedIn logo" style={{ height: 25 }} /></a>
                </li>
                <li className='mx-3'>
                    <a href="https://twitter.com/spencer_moyer22" className='grow' target="_blank" rel='noreferrer'><img src={require('../../assets/images/twitter-logo.png').default} alt="Twitter logo" style={{ height: 25 }} /></a>
                </li>
                <li className='mx-3'>
                    <a href="https://github.com/spencermoyer22" className='grow' target="_blank" rel='noreferrer'><img src={require('../../assets/images/github-logo.png').default} alt="GitHub logo" style={{ height: 25 }} /></a>
                </li>
                <li className='mx-3'>
                    <a href="mailto:spencer.moyer16@yahoo.com" className='grow'><img src={require('../../assets/images/email.png').default} alt="Email logo" style={{ height: 25 }} /></a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;