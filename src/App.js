import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <br />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  )
}

export default App;
