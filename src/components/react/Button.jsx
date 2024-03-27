import { resetTheme } from "../../nodeStore"
import "../css/buttons.css"


const Button =({children})=>{
    const SlowReset=()=>{
        resetTheme();
    }
    return(
        <button className="btn btn-dark" onClick={SlowReset}>
            {children}
        </button>
    )
}


export default Button;