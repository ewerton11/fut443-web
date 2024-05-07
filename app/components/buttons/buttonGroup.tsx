import React from 'react'

interface ButtonOrderProps {
  onPositionSelect: (order: string | null) => void
}

const buttons = [
  { label: 'Todos', value: null },
  { label: 'ATA', value: 'Attacker' },
  { label: 'MEI', value: 'Midfielder' },
  { label: 'DEF', value: 'Defender' },
  { label: 'GOL', value: 'Goalkeeper' },
]

const ButtonGroup = ({ onPositionSelect }: ButtonOrderProps) => {
  return (
    <div className="w-full h-12 flex justify-around lg:justify-between">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="w-16 sm:w-24 md:w-32 lg:w-20 flex items-center"
        >
          <button
            className="w-full py-1.5 lg:py-0 md:h-8 rounded-md bg-primary-blue flex justify-center items-center"
            onClick={() => onPositionSelect(button.value)}
          >
            <p className="text-sm sm:text-base lg:text-sm text-white">
              {button.label}
            </p>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup
