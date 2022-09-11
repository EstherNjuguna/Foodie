import React, { useState } from 'react';
// import Header from '../Header/Header';
import {useNavigate} from "react-router-dom"


function CreateRecipeForm({handleAddRecipe}){

    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
       procedure: '',
        meal_id: '',
        url: ''
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        const newRecipe = {...formData}
        e.preventDefault() 
        handleAddRecipe(newRecipe)
        reset()
        navigate('/home')
        window.location.reload();
    }

    const reset = () => {
        setFormData({
            name: '',
        instructions: '',
       procedure: '',
        meal_id: '',
        url: ''
        })
    }



    return (
        <div className="bg-secondary">
            {/* <Header /> */}
            <div className="layout">
            <form onSubmit={handleSubmit}>
                <div className="layoutdiv">
                    <label htmlFor='Name'> Recipes Name: </label>            
                    <input 
                        id='Name' 
                        type ='text' 
                        name='name' 
                        placeholder='Recipe name here...' 
                        value={formData.name}
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="layoutdiv">
                    <label htmlFor='Instructions' > Instructions: </label>
                    <input  
                        type='text' 
                        id='Instructions' 
                        name='instructions' 
                        placeholder='Instructions here...'
                        value={formData.instructions}
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="layoutdiv">
                    <label htmlFor='Procedure' > Procedure: </label>
                    <input  
                        type='text' 
                        id='Instructions' 
                        name='instructions' 
                        placeholder='Procedure here...'
                        value={formData.instructions}
                        onChange={handleChange}>
                    </input>
                </div>
                
             
                
                <button className="layout-btn" type="submit" onClick={handleSubmit}>Add Recipe </button>
            </form>
        
            </div>
        </div>
    )
}

export default CreateRecipeForm