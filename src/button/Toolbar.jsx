export default function Toolbar({onClick}){
    
    return(
        <div onClick={onClick} style={{backgroundColor : "blue"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Secondd</button>
        </div>
    )
}