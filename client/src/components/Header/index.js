import Nav from '../Nav';
import { Link } from 'react-router-dom';
import '../../App.css';

function Header() {
    return (
        <header className='container fs-5 mt-2'>
            <div className='d-flex justify-content-between'>
                <Link className='text-decoration-none' to={'/'}>Spencer Moyer</Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;