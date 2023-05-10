import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import About from "../pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
