import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Tours } from "./pages/Tours";
import { Contact } from "./pages/Contact";

function App() {
  const [active, setActive] = useState("Home");
  console.log("Test");

  return (
    <>
      <div className="content">
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
