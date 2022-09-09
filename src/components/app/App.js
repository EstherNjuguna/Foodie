import React from 'react'
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import Meals from '../meals/Meals';
import Details from '../details/Details';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import SignupForm from '../home/SignUp';
function App() {
  return (
    <Router>
    <div>
  <Navbar />
    </div>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/search" element={<Search />}></Route>
      <Route exact path="/meal/:mealId" element={<Details />}></Route>
      <Route exact path="/meals" element={<Meals />}></Route>
      <Route exact path="/signup" element={<SignupForm />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
