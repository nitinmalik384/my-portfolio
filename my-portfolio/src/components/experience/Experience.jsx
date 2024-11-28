import React from 'react'
import SkillCard from '../skillCard/SkillCard'
import './experience.css'

export default function Experience() {
  return (
    <div id='experience' className='sub-container' >
      <h5>Experience</h5>
      <h2>Work Experience</h2>
      <div className=" experience-container">
      <SkillCard title='Database' skills={['MySQL', 'MongoDB']}/>
      <SkillCard title='Backend Development' skills={['Nodejs', 'Expressjs', 'MongoDB', 'MySQL']}/>
      <SkillCard title='Frontend Development' skills ={['Reactjs', 'Javascript', 'HTML', 'CSS']}/>
      </div>
    </div>
  )
}
