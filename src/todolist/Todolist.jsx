import Todo from "./Todo";

export default function Todolist(){
    return(
        <li>
            <Todo isCompleted={true} text="Learn HTML" isDeleted = {true}/>
            <Todo isCompleted={true} text="Learn Css"/>
            <Todo isCompleted={true} text="Learn js"/>
            <Todo isCompleted={false} text="Learn React Js"/>
        </li>
    )
}