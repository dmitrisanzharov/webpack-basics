// SuperHeavyComponent.js
import React from "react";

// Importing 1,000 modules
import "./generatedModules/module1";
import "./generatedModules/module500"; // Importing at different levels

import bigData from "./bigData.json"; // Huge JSON file import

const SuperHeavyComponent = () => {

  return (
    <div>
      <h1>Webpack is suffering 😈 .............</h1>
      <p>{(bigData as any).message}</p>
    </div>
  );
};

export default SuperHeavyComponent;