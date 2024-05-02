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
    <div className="w-full h-16 flex justify-around">
      {buttons.map((button, index) => (
        <div key={index} className="w-20 flex items-center">
          <button className="w-full h-3/5 rounded-md bg-primary-blue flex justify-center items-center">
            <p className="text-base text-white font-bold">{button.label}</p>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup
