import React from 'react'

export const Technical = (props) => {
  return (
    <>
    
    <li>
      { 
        props.skills.map((skill,index)=>{
          <ul key = {index} >{skill}</ul>
        })
      }
    </li>
    </>
  )
}
