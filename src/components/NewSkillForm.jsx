import React, {useState} from 'react'
import './NewSkillFormStyles.css'

const NewSkillForm = () => {
const [newSkill, setNewSkill] = useState("");

const [showSkill, setShowSkill] = useState(false);

function handleAddSkill(){
    alert(newSkill)
}


  return (
    <div>
        <h2 style={{color: '#f6bd60', textAlign: "center"}}>Add New Skill</h2>
       <form className="NewSkillForm" action="">
        <label >Skill </label>
        <input 
        value={newSkill}
        onChange={(evt)=> setNewSkill(evt.target.value)}
        placeholder="New Skill" 
        />
        <label className="label-name" htmlFor="">Level </label>
            <select >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        <button onClick={handleAddSkill}>Add Skill</button>
       </form>
    
    </div>
  )
}

export default NewSkillForm