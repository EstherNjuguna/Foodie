import React, { useEffect, useState } from "react";
 import MealCard from "../mealcard/MealCard";

// const food = "https://www.themealdb.com/api/json/v1/1/search.php?s"

export default function Home(){

    // const [meals, setMeals] = useState([])
const [categories, setCategories]= useState([])
  
    useEffect(() => {
        fetch("http://localhost:9292/categories")
          .then((res) => res.json())
          .then(setCategories);
      }, []);
    console.log()

    // useEffect(
    //     mealFetcher, []
    // )

    // let mealCards = meals.map((meal) => (<MealCard mealName={meal.strMeal} mealThumbnail={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal}/>))
let mealCards=categories.map((category) => (<MealCard mealName={category.name} mealThumbnail={category.price} mealId={category.cat_id}key={category.cat_id}/>))
    return(
        <div className="container bg-secondary" >
            Home
            <div className="row">
                {mealCards}
            </div>
            
        </div>
    )
}