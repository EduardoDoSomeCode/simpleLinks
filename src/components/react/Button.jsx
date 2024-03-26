import { useState } from "react"

const Button = () => {
    const [number, setNumber] = useState(0)

    const addNumber =()=>{
        setNumber((prevNumber) => prevNumber + 1)
    }
    return (
        <button onClick={ addNumber}>
            {number}
        </button>
    )

}

export default Button;