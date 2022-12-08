import {useState} from 'react'
import './SkillsForm.css'
export default function SkillsForm({setSkills}) {

    const [mySkills,setMySkills] = useState([]);

    const [skill,setSkill] = useState('');


    const handleChange = (e)=>{
        setSkill(e.target.value);
    }

    const handleEnter = (e)=>{
        if(e.key=='Enter')
        {
            if(skill.trim()!=='')
            setSkills([...mySkills,skill])
            setMySkills([...mySkills,skill]);
            setSkill('');

        }
    }

    const deleteSkill = (index)=>{

        let data = [...mySkills];
        data.splice(index,1);
        setSkills([...data])
        setMySkills([...data]);

    }
  return (
    <div className = "Skills">
        <h2>Enter your skills here</h2>
        <label>
        <span>Enter your Skills</span>
            <input type = "text"
            value = {skill}
            onChange = {handleChange}
            onKeyDown = {handleEnter}/>
        </label>
        <div className = "skillsList">
            {mySkills.map((skill,index)=>{
                return(
                    <p className = {index} onClick = {()=>deleteSkill(index)}>{skill}</p>
                )
            })}
        </div>
    </div>
  )
}
