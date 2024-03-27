import CardWrapper from "./cardWrapper";
import "../css/simpleCard.css";
import { useStore } from "@nanostores/react";
import { nameThemeStore } from "../../nodeStore";

const MainComponent = ({ links }) => {
  const $nameThemeStore = useStore(nameThemeStore);
  return (
    <>
      <CardWrapper>
        {links.map((link) =>
          link.Categorie == $nameThemeStore ? (
            <li className="simple-btn simple-card" key={link.Id}>
              <a className="text-btn" target="_blank" href={link.Link}>
                {link.Nombre}
              </a>
              <span className="categorie">{link.Categorie}</span>
              <span className="type">{link.Type}</span>
              {link.img ? (
                <img
                  style={{
                    width: "30px",
                    aspectRatio: "1/1",
                    paddingTop: "1rem",
                  }}
                  src={link?.img}
                />
              ) : null}
            </li>
          ) : null
        )}
      </CardWrapper>
    </>
  );
};

export default MainComponent;
