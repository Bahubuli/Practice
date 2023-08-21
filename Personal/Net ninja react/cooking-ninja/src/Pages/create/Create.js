import React from 'react'
import './Create.css'

import { projectFirestore } from '../../Firebase/config';
import {useState, useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

export default function Create()
{
    const [title, setTitle] = useState('');
    const [method,setMethod] = useState('');
    const [cookingTime,setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients,setNewIngredients] = useState([]);
    const ingredientInput = useRef(null);
    let history = useHistory();

      const  handleSubmit = async (e)=>{
        e.preventDefault();
        const doc = {title,ingredients,method,cookingTime:cookingTime+' Minutes'};
        try{
             await projectFirestore.collection("recipes").add(doc);
            history.push("/");
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        const ing =  newIngredient.trim();

        if(ing && !ingredients.includes(ing))
        {
            setNewIngredients(prevIngredients =>[...prevIngredients,ing])
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }

    // redirect user after data is updated
    // useEffect(() => {
    //     if (data) {
    //       history.push('/')
    //     }
    //   }, [data, history])

  return (
    <div className = "create">
        <h2 className = "page-title">Add a New Recipe</h2>
        <form>
            <label>
                <span>Recipe title:</span>
                <input type = "text"
                onChange = {(e)=>setTitle(e.target.value)}
                value = {title}
                required />
            </label>

            <label>
                <span>Recipe method</span>
                <textarea
                onChange = {(e)=> setMethod(e.target.value)}
                value = {method}
                required
            />

            <label>
                <span>Recipe ingredients:</span>
                <div className = "ingredients">
                    <input type = "text"
                    onChange = {(e)=>{ setNewIngredient(e.target.value)}}
                    value = {newIngredient}
                    ref = {ingredientInput}
                    />
                    <button onClick = {handleAdd} className = "btn">add</button>


                </div>
            </label>
            <p>Current ingredients: {ingredients.
            map(i=><em key = {i}>{i}, </em> )}</p>

            <label>
                <span>Cooking time (minutes): </span>
                <input
                type = "number"
                onChange = {(e)=>setCookingTime(e.target.value)}
                value = {cookingTime}
                required />
            </label>

                <button onClick = {handleSubmit} className = "btn">Submit</button>

            </label>
        </form>
    </div>
  )
}
