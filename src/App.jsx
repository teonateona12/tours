import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Tours } from "./pages/Tours";
import { Place } from "./pages/Place";

function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <div className="content">
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />*/}
          <Route path="/:id" element={<Place />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
