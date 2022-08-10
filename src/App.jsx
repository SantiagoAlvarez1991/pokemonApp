import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextProvider from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
