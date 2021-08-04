import {useState} from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../assets/resume.pdf';

function Nav() {
    const categories = [{link: '', title: 'About'}, {link: 'portfolio', title: 'Portfolio'}, {link: 'contact', title: 'Contact'}];
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <nav className='col-4'>
            <ul className='d-flex flex-wrap justify-content-between' style={{listStyleType: 'none'}}>
                {categories.map(category => (
                    <li className={`mx-1 ${currentCategory.title === category.title}`} key={category.link}>
                        <Link 
                        to={`/${category.link}`}
                        onClick={() => {
                            setCurrentCategory(category)
                        }}
                        className='text-decoration-none middle'
                        >{category.title}</Link>
                    </li>
                ))}
                <li className='mx-1'>
                        <a href={Pdf} target='_blank' rel='noreferrer' className='text-decoration-none middle'>Resume</a>
                </li>    
            </ul>
        </nav>
    );
};

export default Nav;