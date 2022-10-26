import React from 'react'
import './Recipe.css';

import {useParams, useHistory} from "react-router-dom";
import { useFetch } from '../../Hooks/useFetch';
import { useTheme } from '../../Hooks/useTheme';

export default function Recipe() {

    const  {id}= useParams();

    const url = "http://localhost:3000/Recipes/"+ id;

    const {data:recipe , isPending, error} = useFetch(url);

    const {mode} = useTheme();

 console.log(recipe);

  return (

       <div className ={`recipe ${mode}`}>
        {error && <p className = "error"></p>}
        {isPending && <p className = "loading">Loading...</p>}
        {recipe && (

            <>
            <h2 className = "page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook</p>
            <ul>
                {recipe.ingredients
                .map(ing =><li key = {ing}>{ing}</li>)}
            </ul>
            <p className = "method">{recipe.method}</p>
            </>
        )}

       </div>


  )
}
