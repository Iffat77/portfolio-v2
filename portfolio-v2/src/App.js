import './App.css';
import Nav from '../src/components/Nav';
import Home from '../src/screens/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add screens for projects */}
      </Routes>
    </div>
  );
}

export default App;
