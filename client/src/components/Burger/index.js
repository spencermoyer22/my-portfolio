import { useState } from "react";
import styled from 'styled-components';

const StyledBurger = styled.div`
    position: absolute;
    top: 5%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
    outline: none;
    }

    div {
    width: 2rem;
    height: 0.20rem;
    background: #DEE3E3;
    // border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;