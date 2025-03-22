import { createRoot } from "react-dom/client";
import HelloWorld from "./helloworld.jsx"; // Ubah menjadi huruf besar
import Container from "./Container.jsx";
import Todolist from "../todolist/Todolist.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/alertButton.jsx";
import MyButton from "../button/MyButton.jsx";


createRoot(document.getElementById("root")).render(

    <Container>
        <HelloWorld/>
        <Todolist/>
       <AlertButton text= "click me" message="lu ganteng"/>
    <MyButton text="pukul akau" onSmash={() => alert("kamu memukul akau")}/>
        <Table/>
    </Container>
  
);
