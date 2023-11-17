import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <div className="flex bg-gray-800 justify-between">
        <h1 className="text-3xl font-bold text-red-500">Navbar</h1>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
