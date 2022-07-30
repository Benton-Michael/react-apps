import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  // using a template string to provide the button className
  return (
    <button 
      type="button"
      style= {{ backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`} 
      >
         {text}
    </button>
  )
}

export default Button