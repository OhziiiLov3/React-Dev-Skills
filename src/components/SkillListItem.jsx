import React from 'react'

import './SkillListItemStyles.css'


const SkillListItem = ({skill}) => {
  return (
    <div className='flex-ctr-ctr'>
        <li className='SkillListItem'>{skill.name} : <li className='level'>Level {skill.level}</li></li>
    </div>
  )
}

export default SkillListItem