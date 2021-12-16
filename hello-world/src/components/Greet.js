import React from 'react'
import App from '../App'

const Greet =(props) =>{
    console.log(props)
return (
    <div>
      <h1>Hello {props.name} a.k.a {props.animename}</h1>
      {props.children}
    </div>
)
}
export default Greet