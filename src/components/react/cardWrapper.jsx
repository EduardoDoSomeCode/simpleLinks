import "../css/simpleCard.css"
const CardWrapper =({children})=>{

    return(
        <div className="card-Container">

                {children}
        </div>
    )
}

export default CardWrapper;