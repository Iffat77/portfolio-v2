import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import ApexStats from "./screens/ApexStats";
import AqBot from "./screens/AqBot";
import LessCarbon from "./screens/LessCarbon";


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
        <Route path="/projects/lesscarbon" element={<LessCarbon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
