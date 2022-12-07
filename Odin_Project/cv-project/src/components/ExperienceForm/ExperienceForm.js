import {useState} from 'react'
import './ExperienceForm.css'
export default function ExperienceForm({setExp}) {

    const [position,setPosition] = useState('');
    const [company,setCompany] = useState('');
    const [city,setCity] = useState('');
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');

    const [expr,setExpr] = useState({});


    const handleSubmit = (e)=>{
        e.preventDefault();
        setExp({position,company,city,from,to});
    }

  return (
    <div className = "experience-form">
        <h2>Experience</h2>
        <form>
        <label>
            <input type = "text"
            onChange = {(e)=>setPosition(e.target.value)}
            value = {position}
            placeholder = "Position"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>setCompany(e.target.value)}
            value = {company}
            placeholder = "Comapany"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>setCity(e.target.value)}
            value = {city}
            placeholder ="City"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>setFrom(e.target.value)}
            value = {from}
            placeholder = "From"
            required/>
        </label>

        <label >
            <input type = "text"
            onChange = {(e)=>setTo(e.target.value)}
            value = {to}
            placeholder = "To"
            required/>
            </label>
            <button onClick={handleSubmit}>Add</button>
        </form>

    </div>
  )
}
