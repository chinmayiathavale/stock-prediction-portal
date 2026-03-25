import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
        {/* <a href="" className={`btn ${props.classname}`} >{props.text}</a> */}

        <Link to={props.url} className={`btn ${props.classname}`} >{props.text}</Link>
    </>
  )
}

export default Button