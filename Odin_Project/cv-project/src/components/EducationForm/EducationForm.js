import {useState} from 'react'
import './EducationForm.css'
export default function EducationForm({setEdu}) {

  const [institute,setInstitute] = useState('');
  const [city,setCity] = useState('');
  const [degree,setDegree] = useState('');
  const [subject,setSubject] = useState('');
  const [from,setFrom] = useState('');
  const [to,setTo] = useState('');


  const handleClick = (e)=>{
    e.preventDefault();
    setEdu({institute,city,degree,subject,from,to})
  }

  return (
    <div className = "education-form-container">
        <h2>Education</h2>
         <form className = "personal-info-form">
            <label>
                <input type = "text"
                onChange = {(e)=>setInstitute(e.target.value)}
                value = {institute}
                placeholder = "Institute Name"
                required/>
            </label>
            <label>
                <input type = "text"
                onChange = {(e)=>setCity(e.target.value)}
                value = {city}
                placeholder = "City"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>setDegree(e.target.value)}
                value = {degree}
                placeholder = "Degree"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>setSubject(e.target.value)}
                value = {subject}
                placeholder ="Subject"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>setFrom(e.target.value)}
                value = {from}
                placeholder = "From"
                required/>
            </label>
            <label>
                <input type = "text"
                onChange = {(e)=>setTo(e.target.value)}
                value = {to}
                placeholder = "To"
                required/>
            </label>

            <button onClick = {handleClick} >Add</button>
        </form>

    </div>
  )
}
