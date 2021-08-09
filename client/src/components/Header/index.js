import Nav from '../Nav';
import '../../App.css';

function Header() {
    return (
        <header className='container fs-5 mt-2 mb-5'>
            <div className='d-flex justify-content-between'>
                <Nav />
            </div>
        </header>
    );
};

export default Header;