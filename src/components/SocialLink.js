export default function SocialLink({
    link,
    text,
    icon, 
}) {
    return (
        <div>
            <img src={ icon } alt={ text } className="Icon" />
            <a href={ link }>{ text }</a>
        </div>
    );
}