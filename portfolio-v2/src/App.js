import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Home from '../src/screens/Home';
import About from '../src/screens/About';
import Projects from './screens/Projects';

function App() {
  return (
    <div className="App ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
