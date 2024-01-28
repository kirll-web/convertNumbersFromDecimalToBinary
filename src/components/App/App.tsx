import { useState } from "react";
import "./App.css";
import Binary from "../Binary/binary";
import Decimal from "../Decimal/decimal";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Binary number={number} setNumber={setNumber} />
      <Decimal number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
