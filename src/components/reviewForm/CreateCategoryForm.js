import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function CreateCategoryForm({handleAddCategory}) {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
    procedure: "",
    price: ""
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const newCategory = {...formData}
    e.preventDefault();
    handleAddCategory(newCategory);
    reset();
    navigate('/meals')
    window.location.reload();
  };

  const reset = () => {
    setFormData({
        name: "",
        instructions: "",
        procedure: "",
        price: ""
    });
  };

  return (
    <>
      
      <div className="layout">
        <form onSubmit={handleSubmit}>
          <div className="layoutdiv">
            <label htmlFor="FoodName"> Food Name: </label>
            <input
              id="FoodName"
              type="text"
              name="food_name"
              placeholder="Food name here..."
              value={formData.food_name}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="MealId"> Meal ID: </label>
            <input
              type="number"
              id="MealId"
              name="cat_id"
              placeholder="Meal ID here..."
              value={formData.cat_id}
              onChange={handleChange}
            />
          </div>

          

          <button className="layout-btn" type="reset" onClick={handleSubmit}>
            Add Food{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateCategoryForm;