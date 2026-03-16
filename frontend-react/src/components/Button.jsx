import React from 'react'

const Button = (props) => {
  return (
    <>
        <a href="" className={`btn ${props.classname}`} >{props.text}</a>
    </>
  )
}

export default Button