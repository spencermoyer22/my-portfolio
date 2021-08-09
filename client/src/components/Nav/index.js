import { useState } from 'react';
import Burger from '../Burger';
import { Link } from 'react-router-dom';
import Pdf from '../../assets/resume.pdf';
import styled from 'styled-components';

const StyledMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #DEE3E3;
    height: 100vh;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    text-align: center;
    z-index: 5;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateY(-100%)'};

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
    }
`;

function Nav() {
    const [open, setOpen] = useState(false);
    const categories = [{ link: '', title: 'About' }, { link: 'portfolio', title: 'Portfolio' }, { link: 'contact', title: 'Contact' }];

    return (
        <div>
            <Burger open={open} setOpen={setOpen} />
            <StyledMenu style={{ listStyleType: 'none' }} open={open}>
                {categories.map(category => (
                    <li className='mx-1' key={category.link}>
                        <Link
                            to={`/${category.link}`}
                            className='text-decoration-none middle'
                            onClick={() => setOpen(!open)}
                        >{category.title}</Link>
                    </li>
                ))}
                <li className='mx-1'>
                    <a href={Pdf} target='_blank' rel='noreferrer' className='text-decoration-none middle' onClick={() => setOpen(!open)}>Resume</a>
                </li>
            </StyledMenu>
        </div>
    );
};

export default Nav;