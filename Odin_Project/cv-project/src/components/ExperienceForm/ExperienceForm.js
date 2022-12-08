import {useState} from 'react'
import './ExperienceForm.css'
export default function ExperienceForm({setExpList}) {


    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const [inputFields,setInputFields] = useState([{position:'',company:'',
                                                    city:'',from:'',to:''}])

    const handleAdd = (e)=>{
        e.preventDefault();
        const newIpField = {position:'',company:'',
        city:'',from:'',to:''}
        setInputFields([...inputFields,newIpField])
    }

     const handleDelete = (e,index)=>{
        e.preventDefault();
        let data = [...inputFields];
        data[index].city='';
        data[index].company = '';
        data[index].from = '';
        data[index].position = '';
        data[index].to = '';
        setInputFields([...data])
        setInputFields([...inputFields.splice(index,1)]);

        console.log(inputFields);
        setExpList([{from:"from",to:"to",company:"company",
        position:"position"   },...inputFields]);

    }

    const handleFormChange = (index,event)=>{
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
        setExpList([{from:"from",to:"to",company:"company",
        position:"position"   },...inputFields]);
    }

  return (
    <div className = "experience-form">
        <h2>Experience</h2>

        {inputFields.map((input,index)=>{
            return (
        <form key = {index}>
        <label>
            <input type = "text"
            onChange = {(e)=>handleFormChange(index,e)}
            value = {input.position}
            placeholder = "Position"
            name = "position"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>handleFormChange(index,e)}
            value = {input.company}
            placeholder = "Comapany"
            name = "company"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>handleFormChange(index,e)}
            value = {input.city}
            placeholder ="City"
            name = "city"
            required/>
        </label>

        <label>
            <input type = "text"
            onChange = {(e)=>handleFormChange(index,e)}
            value = {input.from}
            placeholder = "From"
            name = "from"
            required/>
        </label>

        <label >
            <input type = "text"
            onChange = {(e)=>handleFormChange(index,e)}
            value = {input.to}
            placeholder = "To"
            name = "to"
            required/>
            </label>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={(e)=>handleDelete(e,index)}>Delete</button>
            <button onClick={handleAdd}>Add More</button>
        </form>
        )
        })}

    </div>
  )
}
