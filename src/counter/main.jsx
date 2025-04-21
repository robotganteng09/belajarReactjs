import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
import CounterApp from "./counterApp";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Counter/>
        <CounterApp/>
    </StrictMode>
)