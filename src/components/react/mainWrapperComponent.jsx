import { useStore } from "@nanostores/react";
import { nameThemeStore, searchQueryString } from "../../nodeStore";
import "../css/simpleCard.css";
import CardWrapper from "./cardWrapper";

const MainComponent = ({ links }) => {
  const $nameThemeStore = useStore(nameThemeStore);
  const $searchQuery = useStore(searchQueryString);

  return (
    <>
      <CardWrapper>
        {links.map((link) => {
          // Check if the link's category matches the theme and search query
          const isVisible =
            ($nameThemeStore === "" || link.Categorie === $nameThemeStore) &&
            ($searchQuery === "" ||
              link.Nombre.toLowerCase().includes($searchQuery.toLowerCase()));

          return isVisible ? (
            <li className="simple-btn simple-card" key={link.Id}>
                 {link.img && (
                <img
                  style={{
                    width: "40px",
                    aspectRatio: "1/1",
                    paddingTop: "1rem",
                    paddingBottom:"1rem",
                  }}
                  src={link.img}
                  alt=""
                />
              )}
              <a className="text-btn" target="_blank" href={link.Link}>
                {link.Nombre}
              </a>
              <span className="categorie">{link.Categorie}</span>
              <span className="type">{link.Type}</span>
           
            </li>
          ) : null;
        })}
      </CardWrapper>
    </>
  );
};

export default MainComponent;
