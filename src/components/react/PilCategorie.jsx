
const PilCategorie = ({ title, spaceLeft }) => {



    return (
        <div style={{ position: "absolute" }}>
            <div style={{  position: "relative", left: `${spaceLeft}px`, background: "#5a7eaf", padding:"1rem",  width: "100px" }}>
                {title}
            </div>
        </div>
    )
}

export default PilCategorie;