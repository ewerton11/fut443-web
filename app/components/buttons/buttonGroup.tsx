import React from 'react'

interface ButtonOrderProps {
  onPositionSelect: (order: string | null) => void
}

const buttons = [
  { label: 'Todos', value: null },
  { label: 'ATA', value: 'Attacker' },
  { label: 'MEI', value: 'Midfielder' },
  { label: 'ZAG', value: 'Defender' },
  { label: 'GOL', value: 'Goalkeeper' },
]

const ButtonGroup = ({ onPositionSelect }: ButtonOrderProps) => {
  return (
    <div className="w-full h-16 flex justify-around">
      {buttons.map((button, index) => (
        <div key={index} className="w-24 md:w-20 flex items-center">
          <button
            className="w-full max-sm:py-1.5 rounded-md bg-primary-blue flex justify-center items-center"
            onClick={() => onPositionSelect(button.value)}
          >
            <p className="text-lg sm:text-sm md:text-base text-white">
              {button.label}
            </p>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ButtonGroup
