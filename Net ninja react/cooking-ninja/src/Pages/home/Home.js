// styles
import './Home.css'
import RecipeList from '../../components/RecipeList'
// hooks

import { useState,useEffect } from 'react';
import { projectFirestore } from '../../Firebase/config'

export default function Home() {

    const [data,setData] = useState(null);
    const [isPending,setIsPending]  =useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{

            if(snapshot.empty)
            {
                setError("No recipres to load");
                setIsPending(false);
            }
            else
            {
                let results = [];
                snapshot.docs.forEach(doc =>{

                    results.push({
                        id:doc.id,...doc.data()
                    })
                })
                setData(results);
                setIsPending(false);
            }
        }, (err) =>{
            setError(err.message);
            setIsPending(false);
        })
        
        // Listner is still listening
        // even if we move to different page
        // and it will try to change state on that page
        // but we are no longer on that page
        // so we need to use a cleanup function that will fire
        // when our compoenet/page mounts
        // unsubscribe from the listner

        return ()=>{
            unsub();
        }
    },[])

  return (
    <div className = "home">
        {error && <p class = "error">{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        { data && <RecipeList recipes = {data}/>}
    </div>
  )
}
