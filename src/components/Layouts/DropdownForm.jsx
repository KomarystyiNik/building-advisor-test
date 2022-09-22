import { useState } from 'react'
import ArrowBottomIcon from '../../icons/ArrowBottomIcon'
import ArrowTopIcon from '../../icons/ArrowTopIcon'

export default function DropdownForm({children, icon, text, styles}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className={`w-full ${styles} flex flex-col`}>
      <div className="py-3 px-3 bg-blue-600 rounded-t flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {icon}
          <p className="text-white text-xl font-semibold">{text}</p>
        </div>
        <button
          className="rounded-full w-10 h-10 bg-white text-black flex items-center justify-center"
          onClick={handleButtonClick}
        >
          {isOpen ? <ArrowTopIcon /> : <ArrowBottomIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="border-b border-x border-solid border-grey-100 px-4 py-4 rounded-b">
          {children}
        </div>
      )}
    </div>
  )
}
