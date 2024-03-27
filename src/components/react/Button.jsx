import { resetTheme } from "../../nodeStore"



const Button =({children})=>{
    const SlowReset=()=>{
        resetTheme();
    }
    return(
        <button onClick={SlowReset}>
            {children}
        </button>
    )
}


export default Button;