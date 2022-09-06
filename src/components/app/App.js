import React from 'react'
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import Meals from '../meals/Meals';
import Info from '../details/Info';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
function App() {
  return (
    <Router>
    <div>
  <Navbar />
    </div>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/search" element={<Search />}></Route>
      <Route exact path="/meals" element={<Meals />}></Route>
      <Route exact path="/details" element={<Info />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
