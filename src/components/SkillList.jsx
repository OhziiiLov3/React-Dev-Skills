import React from 'react'
import SkillListItem from "./SkillListItem";


const SkillList = ({skills}) => {
  return (
    <div>
        <h1 style={{color: '#f6bd60', textAlign: "center"}}>Skills List</h1>
      <ul>
        {skills.map((skill,idx)=>
        <SkillListItem skill={skill}  key={idx}/>
        )}
      </ul>
    </div>
  )
}

export default SkillList