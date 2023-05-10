import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
