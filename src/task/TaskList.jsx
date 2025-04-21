

export default function TaskList({items = []}){
    
        return(
            <>
          
            
            <h1>list jadi istri walid</h1>
    
            <ul>
                {items.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </>
        )
}