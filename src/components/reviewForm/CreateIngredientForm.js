import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"


function CreateIngredientForm({handleAddIngredient}){

    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        ingred_id: '',
        procedure: ''
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        const newIngredient = {...formData}
        e.preventDefault() 
        handleAddIngredient(newIngredient)
        reset()
        navigate('/search')
        window.location.reload();
    }

    const reset = () => {
        setFormData({
            name: '',
        instructions: '',
        ingred_id: '',
        procedure: ''
        })
    }

    return (
        <div>
            <div className="layout">
            <form onSubmit={handleSubmit}>
                <div className="layoutdiv">
                    <label htmlFor='IngredientName'> Ingredient Name: </label>            
                    <input 
                        id='IngredientName' 
                        type ='text' 
                        name='name' 
                        placeholder='Ingredient name here...' 
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
               
                <button className="layout-btn" type="reset" onClick={handleSubmit}>Add Exercise </button>
            </form>
        
            </div>
        </div>
    )
}

export default CreateIngredientForm