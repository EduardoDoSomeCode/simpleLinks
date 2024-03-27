import "../css/simplePil.css";

const PilCategorie = ({ title, spaceLeft }) => {

const ShowValueClick = ()=>{
    console.log(title)
}

    return (
        <div style={{ position: "absolute" }}>
            <div onClick={ShowValueClick} className="pil-Card" style={{  left: `${spaceLeft}px`,  }}>
              <span style={{fontSize:"1rem"}}>{title}</span>  
            </div>
        </div>
    )
}

export default PilCategorie;