import React from 'react'
import './Cv.css'
import mario from './mario.png'
export default function Cv({expList,eduList,personalInfo,skills}) {

    console.log(skills,"fuck that");
  return (
    <div className = "Cv">

        <div className = "Title-box">
            <p className = "Name">{personalInfo.name}</p>
            <p className = "Title">{personalInfo.title}</p>
        </div>

        <div className = "info-container">
            <div className = "left-container">
                <div className = "Description">
                    <h3>Discription <hr></hr></h3>
                    <p> {personalInfo.description}</p>
                </div>

                <div className = "Experience">
                    <h3>Experience <hr></hr></h3>
                    {expList.map((exp)=>(
                        <div className = "exp-container">
                           <div className = "exp-div">
                                <p className = "date">{exp.from}</p>
                                <p className = "date"> {exp.to}</p>
                           </div>
                           <div className = "company-div">
                                <p className = "company-name">{exp.company}</p>
                                <p className = "company-role">{exp.position}</p>
                           </div>
                        </div>
                    ))}
                </div>

                <div className = "Education">
                    <h3>Education <hr></hr></h3>
                    {eduList.map((edu)=>(
                        <div className = "exp-container">
                           <div className = "exp-div">
                                <p className = "date">{edu.from}</p>
                                <p className = "date"> {edu.to}</p>
                           </div>
                           <div className = "company-div">
                                <p className = "company-name">{edu.institute}</p>
                                <p className = "company-role">{edu.subject}</p>
                                <p className = "city">{edu.city}</p>
                           </div>
                        </div>
                    ))}
                </div>

                <div className="SkillSet">
                    <h3>Skills<hr></hr></h3>
                    <ul>
                    {skills.map((skill,index)=>(
                        <li key = {index}>{skill}</li>
                    ))}
                    </ul>
                </div>

            </div>
            <div className= "right-container">
                <img className= "dp" src = {personalInfo.photo}></img>
                <div className = "personal-details">
                    <h3>Personal Details<hr></hr></h3>
                        <span>Address</span>
                        <p >{personalInfo.address}</p>
                        <span>Phone No</span>
                        <p >{personalInfo.phone}</p>
                        <span>Email</span>
                        <p >{personalInfo.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
