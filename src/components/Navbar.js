// The objective is to make sure that the navbar remains consistent across the portfolio

import logo from '../assets/avatarlogo.jpeg'
import NavbarButton from './NavbarButton';

function NavbarLogo() {
    return (
        <img class = "portfolio-logo"
        src = {logo}
        alt = 'Logo'
        />
    );
}

export default function NavigationBar() {
    return(
        <div>
            <NavbarLogo></NavbarLogo>
            <NavbarButton text="HOME" link='/'/>
            <NavbarButton text="CONTACT" link='/contact'/>
            
        </div>
    );
}