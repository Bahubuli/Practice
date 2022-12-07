
import './App.css';
import EducationForm from './components/EducationForm/EducationForm';
import ExperienceForm from './components/ExperienceForm/ExperienceForm';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import Cv from './components/Cv/Cv'
import {useState} from 'react';
function App() {
    const [personalInfo,setPersonalInfo] = useState({});
    const [exp,setExp] = useState({});
    const [edu,setEdu] = useState({});

  return (
    <div className="App">
      <PersonalInfoForm setPersonalInfo = {setPersonalInfo}/>
      <ExperienceForm setExp = {setExp}/>
      <EducationForm setEdu = {setEdu} />
      <Cv exp = {exp} edu = {edu} personalInfo = {personalInfo}/>
    </div>
  );
}

export default App;
