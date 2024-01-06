import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./App.css";

const entryPoint = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(entryPoint).render(<App />);
