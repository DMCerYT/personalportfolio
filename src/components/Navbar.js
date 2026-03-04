// The objective is to make sure that the navbar remains consistent across the portfolio

import logo from '../assets/avatarlogo.jpeg'

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
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Past Projects</li>
                <li>Current Projections</li>
            </ul>
            
        </div>
    );
}