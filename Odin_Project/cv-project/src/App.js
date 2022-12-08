
import './App.css';
import EducationForm from './components/EducationForm/EducationForm';
import ExperienceForm from './components/ExperienceForm/ExperienceForm';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import Cv from './components/Cv/Cv'
import SkillsForm from './components/SkillsForm/SkillsForm';
import {useState} from 'react';
function App() {
    const [personalInfo,setPersonalInfo] = useState({});
    const [expList,setExpList] = useState([ {from:"from",to:"to",company:"company",
    position:"position"   }]);
    const [eduList,setEduList] = useState([{institute:"Institute",city:"City",
    degree:"Degree",subject:"Subject",
    from:"From",to:"To"}]);

    const [skills,setSkills] = useState([]);
  return (
    <div className="App">
        <h1>Resume Builder</h1>
      <PersonalInfoForm setPersonalInfo = {setPersonalInfo}/>
      <ExperienceForm setExpList = {setExpList}/>
      <EducationForm setEduList = {setEduList} />
      <SkillsForm setSkills = {setSkills}/>
      <Cv expList = {expList} eduList = {eduList} personalInfo = {personalInfo} skills = {skills}/>
    </div>
  );
}

export default App;
