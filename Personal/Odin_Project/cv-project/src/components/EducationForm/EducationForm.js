import {useState} from 'react'
import './EducationForm.css'
export default function EducationForm({setEduList}) {



  const [inputFields,setInputFields] = useState([{institute:'',city:'',degree:'',subject:'',from:'',to:''}])

  const handleClick = (e)=>{
    e.preventDefault();

  }

  const handleFormChange = (event,index)=>{
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    setEduList([{institute:"Institute",city:"City",
    degree:"Degree",subject:"Subject",
    from:"From",to:"To"},...inputFields])
  }

  const handleAdd  = (e)=>
  {
    e.preventDefault();
    const newIpField = {institute:'',city:'',degree:'',subject:'',from:'',to:''}
    setInputFields([...inputFields,newIpField])
  }

  const handleDelete = (e,index)=>{
    e.preventDefault();
    const data = [...inputFields];
    data[index].city='';
    data[index].institute = '';
    data[index].degree = '';
    data[index].from = '';
    data[index].subject = '';
    data[index].to = '';
    setInputFields([...data])
    setInputFields([...inputFields.splice(index,1)]);

    console.log(inputFields);
    setEduList([{institute:"Institute",city:"City",
    degree:"Degree",subject:"Subject",
    from:"From",to:"To"},...inputFields]);
  }

  return (
    <div className = "education-form-container">
        <h2>Education</h2>
        {inputFields.map((input,index)=>{
            return (
         <form className = "personal-info-form" key = {index}>
            <label>
                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.institute}
                name = "institute"
                placeholder = "Institute Name"
                required/>
            </label>
            <label>
                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.city}
                name = "city"
                placeholder = "City"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.degree}
                name = "degree"
                placeholder = "Degree"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.subject}
                name = "subject"
                placeholder ="Subject"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.from}
                name = "from"
                placeholder = "From"
                required/>
            </label>
            <label>
                <input type = "text"
                onChange = {(e)=>handleFormChange(e,index)}
                value = {input.to}
                name = "to"
                placeholder = "To"
                required/>
            </label>

            <button onClick = {handleClick} >Add</button>
            <button onClick = {(e)=>handleDelete(e,index)} >Delete</button>
            <button onClick = {handleAdd} >Add More</button>
        </form>
        )
          })}

    </div>
  )
}
