import "./index.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Place } from "./pages/Place";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Place />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
