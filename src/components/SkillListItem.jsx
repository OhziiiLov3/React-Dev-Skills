import React from 'react'

import './SkillListItemStyles.css'


const SkillListItem = ({skill}) => {
  return (
    <div className='flex-ctr-ctr'>
        <li className='SkillListItem'>{skill.name} <span className='level'>Level {skill.level}</span> </li>
    </div>
  )
}

export default SkillListItem