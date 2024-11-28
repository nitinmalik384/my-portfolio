import React from 'react'
import { FaStar } from "react-icons/fa";
import './skillCard.css'

export default function SkillCard(props) {
  const skills = props.skills ?? []
  const title = props.title ?? 'Title'
  return (
    <div className='skill-card-container'>
    <p className='skill-card-title'>{title}</p>
    {skills.map((skill, index) => {
      return <div className='skill-card-item'><FaStar color='#FFD700' /><span key={index}>{ skill}</span></div>
    })}
    </div>
  )
}
