function Footer() {
    return (
        <footer className='mt-5 text-center py-3'>
            <ul style={{listStyle: 'none'}} className='d-flex justify-content-center'>
                <li className='mx-3'>
                    <a href="https://www.linkedin.com/in/spencer-moyer-08b347133/" target="_blank"><img src={require("../../assets/images/linkedin-logo.png").default} alt="LinkedIn logo" style={{height: 50}}/></a>
                </li>
                <li className='mx-3'>
                    <a href="https://twitter.com/spencer_moyer22" target="_blank"><img src={require('../../assets/images/twitter-logo.png').default} alt="Twitter logo" style={{height: 50}}/></a>
                </li>
                <li className='mx-3'>
                    <a href="https://github.com/spencermoyer22" target="_blank"><img src={require('../../assets/images/github-logo.png').default} alt="GitHub logo" style={{height: 50}}/></a>
                </li>
            </ul>
            <p className='mt-3'>
                &copy;2021 Spencer Moyer | spencer.moyer16@email.com
            </p>
        </footer>
    );
};

export default Footer;