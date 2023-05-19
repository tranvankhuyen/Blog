import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import About from "../pages/About";
import Home from "../pages/Home";
import "./App.css";
import OnePost from "./components/OnePost";

function App() {
  let { slug } = useParams();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path=":slug" element={<OnePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
