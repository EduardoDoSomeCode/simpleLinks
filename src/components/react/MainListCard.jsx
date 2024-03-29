
const MainListCardReact = ({linksToRender}) => {
  
  return (
    <ul>
      {linksToRender.map((link) => (
        <li className="simple-btn simple-card  ">
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
          <a className="text-btn" target="_blank"  href={link.Link}>
            {link.Nombre}
          </a>
          <span className="categorie">{link.Categorie}</span>
          <span className="type">{link.Type}</span>
        </li>
      ))}
    </ul>
  );
};

export default MainListCardReact;
