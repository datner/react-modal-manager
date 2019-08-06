import React, {useContext} from "react";
import logo from "./logo.svg";
import ModalManager from "./components/ModalManager"
import HelloModal from "./components/HelloModal"
import ModalContext from "./contexts/ModalContext"
import "./App.css";


function App() {
  const {showModal} = useContext(ModalContext)
  return (
    <div className="App">
      <ModalManager/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={() => showModal(HelloModal)}>
          show modal
        </button>
      </header>
    </div>
  );
}

export default App;
