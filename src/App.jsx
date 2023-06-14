import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/admin" element={Admin} />
        <Route path="/" element={Home} />
        <Route path="/products" element={Products} />
        <Route path="/about-this-project" element={Project} />
        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
