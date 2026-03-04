export default function BasedCard({
    header,
    text,
    smallPrint,
}) {
    return (
        <div className="Card">
            <h2 className="Header">{ header }</h2>
            <p className="Text">{ text }</p>
            <p className="SmallPrint">{ smallPrint }</p>
        </div>
    );
}