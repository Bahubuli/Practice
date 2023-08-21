import './App.css';
import EducationForm from './components/EducationForm/EducationForm';
import ExperienceForm from './components/ExperienceForm/ExperienceForm';
import PersonalInfoForm from './components/PersonalInfoForm/PersonalInfoForm';
import Cv from './components/Cv/Cv'
import SkillsForm from './components/SkillsForm/SkillsForm';
import {useState,useRef} from 'react';

import {useReactToPrint} from 'react-to-print';

function App() {

    const [personalInfo,setPersonalInfo] = useState({});
    const [expList,setExpList] = useState([ {from:"From",to:"To",company:"Company",
    position:"Position"   }]);
    const [eduList,setEduList] = useState([{institute:"Institute",city:"City",
    degree:"Degree",subject:"Subject",
    from:"From",to:"To"}]);

    const [skills,setSkills] = useState([]);


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"Resume",
        onAfterPrint: ()=> alert('print success')
    })

  return (
    <div className="App">
        <h1>Resume Builder</h1>
      <PersonalInfoForm setPersonalInfo = {setPersonalInfo}/>
      <ExperienceForm setExpList = {setExpList}/>
      <EducationForm setEduList = {setEduList} />
      <SkillsForm setSkills = {setSkills}/>
      <Cv ref = {componentRef} expList = {expList} eduList = {eduList} personalInfo = {personalInfo} skills = {skills}/>
      <button className = "btn" onClick = {handlePrint}>save as pdf</button>
    </div>
  );
}

export default App;
