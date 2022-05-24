import { useState } from "react";

const ItemCount = () => {

    let [onAdd, setOnAdd] = useState(1)
    
    const stock = 5
    const initial = 1
    const increment = () => {
        if (onAdd < stock) {
        setOnAdd (onAdd+1)
        }
    }
    const decrement = () => {
        if (onAdd > initial) {
            setOnAdd (onAdd-1)
        }
    }

    return (
        <div>
            <button onClick={increment}>+</button>
                <h1>{onAdd}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}

 export default ItemCount;