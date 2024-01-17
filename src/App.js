import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Shop from './Shop';
import Recipes from './Recipes';
import WeeklyMenu from './WeeklyMenu';
import './App.css';
import bag from './image/bag.png'

function App() {

  return <Router >
   <nav>
    <p className="logo">Hello Food</p>
    <Link to="/" className="link">Shop</Link>
    <Link to="/recipes" className="link">Recipes</Link>
    <Link to="/weeklyMenu" className="link">Weekly menu</Link>
    <img className="bag-menu" src={bag} alt="bag"></img>
  </nav>
  
  <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/weeklyMenu" element={<WeeklyMenu />} />
  </Routes>
 
  </Router>
  
}

export default App;