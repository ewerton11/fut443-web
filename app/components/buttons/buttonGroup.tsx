import React from 'react'

const buttons = [
  { label: 'Todos' },
  { label: 'ATA' },
  { label: 'MEI' },
  { label: 'ZAG' },
  { label: 'GOL' },
]

const ButtonGroup = () => {
  return (
    <div className="w-full h-16 flex justify-around border-b border-gray-300">
      {buttons.map((button, index) => (
        <div key={index} className="w-14 flex items-center">
          <button className="w-full h-1/2 rounded-md bg-primary-blue flex justify-center items-center">
            <p className="text-sm">{button.label}</p>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup
