import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appartement from "./pages/Appartement";
import APropos from "./pages/APropos";
import Error from "./pages/Error";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/appartement/:id" element={<Appartement />} />

        <Route path="/APropos" element={<APropos />} />

        <Route path="/Error" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
