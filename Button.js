import React from 'react'
import './Button.css'
const Button=(props)=>{
  return <button onClick={props.callApi}>
    Generate a Joke
  </button>
}



export default Button;
