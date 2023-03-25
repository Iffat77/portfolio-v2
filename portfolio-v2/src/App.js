import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav";
import Footer from "./components/Footer";
import Home from "../src/screens/Home";
import About from "../src/screens/About";
import Projects from "./screens/Projects";
import ApexStats from "./screens/ApexStats";
import AqBot from "./screens/AqBot";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/apexstats" element={<ApexStats />} />
        <Route path="/projects/aqbot" element={<AqBot />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
