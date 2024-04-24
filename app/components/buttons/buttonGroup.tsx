import React from 'react'

interface Button {
  label: string
}

interface ButtonGroupProps {
  buttons: Button[]
}

const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  return (
    <div className="w-full h-16 flex justify-around border-b border-gray-300">
      {buttons.map((button, index) => (
        <div key={index} className="w-16 flex items-center">
          <button className="w-full h-1/2 rounded-md bg-primary-blue flex justify-center items-center">
            <p className="text-base">{button.label}</p>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup
