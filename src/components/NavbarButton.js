import {
    Link
} from "react-router-dom";
import styles from '../styles/navbarButton.module.css';

export default function NavbarButton({
    link,
    color,
    text,
    icon, 
}) {

    let buttonStyle = styles.button;

    return (
        <Link to={ link }>
            <div className={ buttonStyle }>
                <span className="text">{text}</span>
                <span className="icon">{icon}</span>
            </div>
        </Link>
    );
}