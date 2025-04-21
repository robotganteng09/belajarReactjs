import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp(){
    const [show2,setShow2] = useState(true);

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return(
        <div>
   
        {show2? <Counter name="amba"/> : <Counter name="sal"/>}
        <input type="checkbox" checked = {show2} onChange={handleChange} />
        </div>
    )
}