import React, {useState} from 'react'
import './NewSkillFormStyles.css'

const NewSkillForm = ({handleSkill}) => {

const [formData, setFormData] = useState({
    name: "",
    level: "3",
});


function handleChange(e){
    setFormData( {
        ...formData,
        [e.target.name]: e.target.value,
    })
}

function handleAddNew(e){
  e.preventDefault()
  handleSkill(formData)
}

return (
    <div>
      <h2 style={{color: '#f6bd60', textAlign: "center"}}>Add New Skill</h2>
       <form className="NewSkillForm" onSubmit={handleAddNew}>
        <label htmlFor='' >Skill </label>
        <input  type="text" onChange={handleChange} value={formData.name}  name='name' placeholder='New Skill' />
        <label className="label-name" htmlFor="">Level </label>
            <select name='level' value={formData.level} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        <button type='submit'>Add Skill</button>
       </form>
    
    </div>
  )
}

export default NewSkillForm