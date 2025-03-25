// state
// snapshot
// state update

import { useState } from "react";

export default function Counter(){
    let [counter,setCounter] = useState(0);

    console.info(`render state ${counter}`)

    function handleClick(){
        // setCounter(counter +6)
        setCounter((c) => c + 1) // state update
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        // data masih 0
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