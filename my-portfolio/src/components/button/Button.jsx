import React from 'react'
import './button.css'
export default function Button(props) {
  const varient = props.varient ?? 'primary'
  const href = props.href ?? '#'
  const download = props.download ?? false
  const title = props.title ?? 'Button'
  const handleClick = props.handleClick ?? function() {console.log(`${title} is clicked`)}
  return (
    <a className={`btn ${varient}`} href={href}  onClick={handleClick} download={download}>{title}</a>
  )
}
