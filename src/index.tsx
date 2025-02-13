import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<h1>Hello World</h1>); // here I can also put: root.render(<App />);

