import "./App.css";
import Cadastro from "./components/Cadastro";
import Usuario from "./components/Usuario";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState(false);

  return (
    <div className="App">
      <Cadastro setInfo={setInfo} />
      {info && <Usuario info={info} />}
    </div>
  );
}

export default App;
