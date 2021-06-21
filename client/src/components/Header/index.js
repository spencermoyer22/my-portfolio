import Nav from '../Nav';
import { Link } from 'react-router-dom';
import '../../App.css';

function Header() {
    return (
        <header className='container fs-2'>
            <div className='d-flex justify-content-between'>
                <h1><Link className='text-decoration-none fs-2' to={'/'}>Spencer Moyer</Link></h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;