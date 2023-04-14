import React from 'react'
import SkillListItem from "./SkillListItem";


const SkillList = () => {
  return (
    <div>
      <ul>
        <h1 style={{color: '#f6bd60', textAlign: "center"}}>Skills List</h1>
        <SkillListItem/>
        <SkillListItem/>
        <SkillListItem/>
      </ul>
    </div>
  )
}

export default SkillList