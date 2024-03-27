import CardWrapper from "./cardWrapper";
import "../css/simpleCard.css"

const MainComponent = ({ links }) => {
    return (
        <CardWrapper>
            {
                links.map((link) => (
                    <li className="simple-btn simple-card" key={link.Id}>
                        <a className="text-btn" href={link.Link}>{link.Nombre}</a>
                        <span className="categorie">{link.Categorie}</span>
                        <span className="type">{link.Type}</span>
                    </li>
                ))
            }
        </CardWrapper>
    );
}

export default MainComponent;
