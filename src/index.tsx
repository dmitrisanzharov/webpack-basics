import React from "react";
import ReactDOM from "react-dom/client";
import SuperHeavyComponent from './components/SuperHeavyComponent';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<SuperHeavyComponent />);