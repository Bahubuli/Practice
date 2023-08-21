import React from 'react'
import './Recipe.css';
import {useEffect ,useState} from 'react'
import {useParams, useHistory} from "react-router-dom";
import { useTheme } from '../../Hooks/useTheme';
import { projectFirestore } from '../../Firebase/config';

export default function Recipe() {

    const [recipe,setRecipe] = useState(null);
    const [isPending,setIsPending]  =useState(false);
    const [error,setError] = useState(false);


    const  {id}= useParams();

    const {mode} = useTheme();


    useEffect(()=>{
        setIsPending(true);

        projectFirestore.collection('recipes')
        .doc(id).get().then((doc)=>{

            if(doc.exists)
            {
                setIsPending(false);
                setRecipe(doc.data());
            }
            else
            {
                setIsPending(false);
                setError("could not find that recipe")
            }
        })
    },[id])

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
