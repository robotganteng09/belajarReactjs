import { createRoot } from "react-dom/client";
import HelloWorld from "./helloworld.jsx"; // Ubah menjadi huruf besar
import Container from "./Container.jsx";
import Todolist from "../todolist/Todolist.jsx";


createRoot(document.getElementById("root")).render(

    <Container>
        <HelloWorld/>
        <Todolist/>
    </Container>
  
);
