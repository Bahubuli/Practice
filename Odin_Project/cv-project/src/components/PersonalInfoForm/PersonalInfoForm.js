import {useState} from 'react'
import './PersonalInfoForm.css'
export default function PersonalInfoForm({setPersonalInfo}) {



    const [name,setName] = useState('');
    const [title,setTitle] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [description,setDescription] = useState('');
    const [address,setAddress] = useState('');

    const printProfile = (e)=>{
        e.preventDefault();
        setPersonalInfo({name,title,email,phone,description,address})
    }

  return (
    <div className = "personal-info">
        <h2 className = "form-title">Personal Information</h2>
        <form className = "personal-info-form">
            <label>
                <input type = "text"
                onChange = {(e)=>setName(e.target.value)}
                value = {name}
                placeholder = "Name"
                required/>
            </label>
            <label>
                <input type = "text"
                onChange = {(e)=>setAddress(e.target.value)}
                value = {address}
                placeholder = "Address"
                required/>
            </label>
            <label>

                <input type = "mail"
                onChange = {(e)=>setEmail(e.target.value)}
                value = {email}
                placeholder = "Email"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>setTitle(e.target.value)}
                value = {title}
                placeholder ="Title"
                required/>
            </label>
            <label>

                <input type = "text"
                onChange = {(e)=>setPhone(e.target.value)}
                value = {phone}
                placeholder = "Phone"
                required/>
            </label>
            <label className = "description">
                <input type = "text"
                onChange = {(e)=>setDescription(e.target.value)}
                value = {description}
                placeholder = "Description"
                required/>
            </label>

            <button onClick = {printProfile}>Add</button>
        </form>
    </div>
  )
}
