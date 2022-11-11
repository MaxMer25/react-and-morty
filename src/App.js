import "./App.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Favorites from "./pages/Favorites";
import Random from "./pages/Random";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"character/:id"} element={<Character />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="random" element={<Random />} />
          {/* <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
