import { Routes, Route } from "react-router-dom";
import {QueryClientProvider, QueryClient} from "react-query"
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import ContextProvider from "./context/ContextoFormulario";

function App() {
  
  const queryClient = new QueryClient()
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </ContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
