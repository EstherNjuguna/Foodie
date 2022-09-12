import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import CreateRecipeForm from '../reviewForm/CreateRecipeForm'
const searchfood= "http://localhost:9292/recipes"
export default function Details(){
  
  const[image, setImage] = useState("")
  const[video, setVideo] = useState("")
  const[instructions, setInstructions] = useState("")
  const[name, setName] = useState("")
  const[source, setSource] = useState("")
   const[id, setId] = useState("")
 let {mealId}=useParams()

  const ReviewData = searchfood +mealId
  const mealSearch= () => {
    fetch(ReviewData)
    .then(response => response.json())
    .then(data => {
     const meal= data.meals
      setImage(meal.strMealThumb)
      setName(meal.strMeal)
       setVideo(meal.strYoutube)
        setSource(meal.strSource) 
      setInstructions(meal.strInstructions);
  })
  }
    useEffect( 
        mealSearch,[]
    )
    return (
     
      <div className='container bg-secondary col-3'>
          
          <div className='card' style={{width : 25 + 'rem'}} >
      
          <img src={image} style={{height: 200 + 'px', width: 300 + 'px', }} alt={name}
           />
            <p >{instructions}</p> 
         <p><a href={video} alt={name}>{video}</a></p>
         <p><a href={source} alt={name}>{source}</a></p>
    
          </div>
  <CreateRecipeForm />
      </div>
      
    )
  }

