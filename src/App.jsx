import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/admin" />
        <Route path="/home" />
        <Route path="/products" />
        <Route path="/about-this-proyect" />

        <Route path="*" />
      </Routes>
    </>
  );
}

export default App;
