import {
    Link
} from "react-router-dom";

export default function NavbarButton({
    link,
    color,
    text,
    icon, 
}) {

    let buttonStyle = "defaultButton"

    return (
        <Link to={ link }>
            <div className={ buttonStyle }>
                <span className="text">{text}</span>
                <span className="icon">{icon}</span>
            </div>
        </Link>
    );
}