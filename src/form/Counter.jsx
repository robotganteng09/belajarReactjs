// state

import { useState } from "react";

export default function Counter(){
    let [counter,setCounter] = useState(0);

    console.info('render state')

    function handleClick(){
        setCounter(counter +1)
        console.log(counter)
    }
    return(
        <div>

        <div>
          <button onClick={handleClick}>Incrament</button>
        </div>

        <h1>Counter : {counter}</h1>
        </div>
    )
}