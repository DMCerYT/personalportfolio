import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import TheEpicTestString from './components/TestText';
import Navbar from './components/Navbar';

import './App.css';
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="App">
      {/** Any Alert should show up here */}
      {/*Navbar*/}
      <Navbar></Navbar>
      {/*Home page*/}

      {/*Footer*/}
      

    </div>
  );
}

export default App;
