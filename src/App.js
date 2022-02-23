import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  const nrows = 10;
  const ncols = 10;
  const chanceLightStartsOn = 0.5;
  return (
    <div className="App">
      <Board nrows={nrows} ncols={ncols} chanceLightStartsOn={chanceLightStartsOn} />
    </div>
  );
}

export default App;
