import "./App.css";
import React, { useEffect, useState } from "react";

import GetStarwarsInfoRandom from "./GetStarwarsInfo";
//const url = ``

const App = () => {
  return (
    <div className="heading3">
      <h3>Starwars API Hits</h3>
      <GetStarwarsInfoRandom />
    </div>
  );
};

export default App;
