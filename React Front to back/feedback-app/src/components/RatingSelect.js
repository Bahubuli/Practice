import {useState} from 'react'

export default function RatingSelect({setRating}) {

   const [selected,setSelected] = useState(10);

   const handleClick =(i)=>
   {
        setSelected(i);
        setRating(i);
   }


  return (
    <div>
        <div className = "rating-container">
            {[...Array(11)].map((e,i) =>  <p key = {i} onClick = {()=>handleClick(i)} className = {`rtng ${i===selected?"selected":''}`}>{i}</p> )}

        </div>
    </div>
  )
}
