import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Destinations from "./components/pages/Destinations";
import Accomodations from "./components/pages/Accomodations";
import Signin from "./components/pages/Signin";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/accomodations" element={<Accomodations />} />
          <Route exact path="/sign-in" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
