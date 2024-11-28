import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {GoChecklist} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
export default function Nav() {
    const [active, setActive] = useState(1)
    const navMap={
        1:<AiOutlineHome/>,
        2:<BiUser/>,
        3:<FaLaptopCode/>,
        4:<GoChecklist/>,
        5:<BiMessageSquareDetail/>
    }
    
  return (
    <nav className='nav-container'>
        <a href='#home' onClick={() => setActive(1)} className={`nav-item ${active === 1 ? 'active' : ''}`}>{navMap[1]}</a>
        <a href='#about' onClick={() => setActive(2)} className={`nav-item ${active === 2 ? 'active' : ''}`}>{navMap[2]}</a>
        <a href='#experience' onClick={() => setActive(3)} className={`nav-item ${active === 3 ? 'active' : ''}`}>{navMap[3]}</a>
        <a href='#myprojects' onClick={() => setActive(4)} className={`nav-item ${active === 4 ? 'active' : ''}`}>{navMap[4]}</a>
        <a href='#contacts' onClick={() => setActive(5)} className={`nav-item ${active === 5 ? 'active' : ''}`}>{navMap[5]}</a>
        </nav>
  )
}
