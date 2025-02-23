import React from 'react'

export const Technical = (props) => {
  return (
    <>
    <h5>{props.title}</h5>
    <ul>
      {props.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    </>
  )
}
