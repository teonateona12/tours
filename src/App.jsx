import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Place } from "./pages/Place";

function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="content">
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          <Route path="/:id" element={<Place />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
