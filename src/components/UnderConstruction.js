import catWork from '../assets/temp/underconstruction.mp4'

export default function UnderConstruction({
    pageName = "This Page",
}) {
    return (
        <div className="UnderConstruction Component">
            <video width="500" height="500" autoplay="true" loop playsinline muted>
                <source src={catWork} type="video/mp4"/>
            </video>
            <p>{pageName} is Under Construction...</p>
        </div>
    );
}