import React from 'react'
// import { Box } from "@chakra-ui/react"
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Myprojects from '../components/myprojects/Myprojects'
import Contacts from '../components/contacts/Contacts'
import Footer from '../components/footer/Footer'
import './main.css'

const Main = () => {
  return (
    
    <div className='main-container'>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </div>
  )
}

export default Main