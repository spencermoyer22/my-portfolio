import { Link } from 'react-router-dom';
import Pdf from '../../assets/resume.pdf';
import Burger from '../Burger';
import styled from 'styled-components';

const StyledMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap nowrap;
    background: #DEE3E3;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    text-align: center;
    z-index: 5;

    li {
        margin: 10px 0;
    }

    a {
        color: #262B2C;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.5rem;
        text-decoration: none;
        transition: color 0.3s linear;

        &:hover {
        color: #869598;
        }
    }
`;

function Nav() {
    const categories = [{link: '', title: 'About'}, {link: 'portfolio', title: 'Portfolio'}, {link: 'contact', title: 'Contact'}];

    return (
        <div className='col-4'>
            <StyledMenu style={{listStyleType: 'none'}}>
                {categories.map(category => (
                    <li className='mx-1' key={category.link}>
                        <Link 
                        to={`/${category.link}`}
                        className='text-decoration-none middle'
                        >{category.title}</Link>
                    </li>
                ))}
                <li className='mx-1'>
                        <a href={Pdf} target='_blank' rel='noreferrer' className='text-decoration-none middle'>Resume</a>
                </li>    
            </StyledMenu>
            <Burger/>
        </div>
    );
};

export default Nav;