import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import logo from './logo.svg';
import TheEpicTestString from './components/TestText';
import Navbar from './components/Navbar';

import './App.css';
import UnderConstruction from "./components/UnderConstruction";

// Getting Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
      {/* Content goes here! */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/** Any Alert should show up here */}
      {/*Navbar*/}
      {/*Home page*/}

      {/*Footer*/}
      

    </div>
  );
}

export default App;
