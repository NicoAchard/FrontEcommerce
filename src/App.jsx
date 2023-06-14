import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar /> {/* Agrega el componente NavBar aquí */}
      <Routes>
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/admin" />
        <Route path="/NavBar" element={NavBar} />
        <Route path="/home" />
        <Route path="/products" />
        <Route path="/about-this-proyect" />
        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
