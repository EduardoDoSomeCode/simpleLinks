const MainListCardReact = ({linksToRender}) => {
  return (
    <ul>
      {linksToRender.map((link) => (
        <li className="simple-btn simple-card  ">
          <a className="text-btn" href={link.Link}>
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
