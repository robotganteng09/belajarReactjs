import Todo from "./Todo";

export default function Todolist(){
    const data = [
      {
        id:0,
        text: "learn html",
        isCompleted: true
      },
      {
        id:1,
        text:"learn css",
        isCompleted:true
      },
      {
        id:2,
        text:"learn js",
        isCompleted:true
      },
      {
        id:3,
        text:"learn Reactjs",
        isCompleted:false
      }
    ]
      // const Todos = data.map((todo) => {
      //  return <Todo key={todo.id}{...todo}/>
      // })
    return(
        <li>
            {/* <Todo isCompleted={true} text="Learn HTML" isDeleted = {true}/>
            <Todo isCompleted={true} text="Learn Css"/>
            <Todo isCompleted={true} text="Learn js"/>
            <Todo isCompleted={false} text="Learn React Js"/> */}

           {data.map((todo) => (
            <Todo key={todo.id} {...todo}/>
           ))}
        </li>
    )
}