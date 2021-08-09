import { useState } from 'react';
import Burger from '../Burger';
import Menu from '../Menu';

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Nav;