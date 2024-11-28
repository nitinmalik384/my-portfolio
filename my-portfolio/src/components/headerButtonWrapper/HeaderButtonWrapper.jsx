import React from 'react'
import './headerButtonWrapper.css'
import Button from '../button/Button'

export default function HeaderButtonWrapper() {
  return (
    <div className="container">
        <Button varient='primary-outline' title='Download CV' download/>
        <Button varient='primary' title='Contact'/>

    </div>
  )
}
