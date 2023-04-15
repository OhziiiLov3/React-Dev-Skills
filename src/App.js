import React,{useState} from "react";
import SkillList from './components/SkillList';
import NewSkillForm from "./components/NewSkillForm";

function App() {

  const [skills, setSkills] = useState([
    {name: "HTML", level: 5},
    {name: "CSS", level: 3},
    {name: "JavaScript", level: 4},
    {name: "Python", level: 2},
  ]);

  function handleSkill(newSkill) {
    setSkills(skills => [...skills,newSkill])    
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm handleSkill={handleSkill}/>
    </div>
  );
}

export default App;
