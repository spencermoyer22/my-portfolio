import {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const categories = [{name: '', title: 'About Me'}, {name: 'portfolio', title: 'Portfolio'}, {name: 'contact', title: 'Contact'}, {name: 'resume', title: 'Resume'}];
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <nav className='col-6'>
            <ul className='d-flex flex-wrap justify-content-between' style={{listStyleType: 'none'}}>
                {categories.map(category => (
                    <li className={`mx-1 ${currentCategory.name === category.name}`} key={category.name}>
                        <Link 
                        to={`/${category.name}`}
                        onClick={() => {
                            setCurrentCategory(category)
                        }}
                        className='text-decoration-none'
                        >{category.title}</Link>
                    </li>
                ))}    
            </ul>
        </nav>
    );
};

export default Nav;