import React from 'react'
import { useEffect, useState} from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Search from '../search/Search';
import Meals from '../meals/Meals';
import CreateIngredientForm from '../reviewForm/CreateIngredientForm';
import CreateCategoryForm from '../reviewForm/CreateCategoryForm';

import Details from '../details/Details';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import SignupForm from '../home/SignUp';
import CreateRecipeForm from '../reviewForm/CreateRecipeForm';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  

  function handleAddRecipe(newRecipe) {
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((newRecipeFromBackend) => {
        const updatedRecipes = [newRecipeFromBackend, ...recipes];
        setRecipes(updatedRecipes);
        
      });
  }

  function handleAddIngredient(newIngredient) {
    fetch("http://localhost:9292/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIngredient),
    })
      .then((res) => res.json())
      .then((newIngredientFromBackend) => {
        const updatedIngredients = [newIngredientFromBackend, ...ingredients];
        setIngredients(updatedIngredients);
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/recipe/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setRecipes);
  }

  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  function handleAddCategory(newCategory) {
    fetch("http://localhost:9292/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((newCategoryFromBackend) => {
        const updatedCategory = [newCategoryFromBackend, ...categories];
        setCategories(updatedCategory);
      });
  }


  
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
      <Route path="/newrecipe" element={ <CreateRecipeForm handleAddRecipe={handleAddRecipe} /> }></Route>
      <Route path="/newingredient" element={ <CreateIngredientForm handleAddIngredient={handleAddIngredient} /> }></Route>
      <Route path="/newcategory" element={ <CreateCategoryForm handleAddCategory={handleAddCategory} /> }></Route>
    </Routes>
    </Router>
  );
}

export default App;
