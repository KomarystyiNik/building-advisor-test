import { useState } from "react"
import { NavLink } from "react-router-dom"
import DoneIcon from "../icons/DoneIcon"

export default function NavItem({ title, buttonText, done, num, href="#" }) {
  const [isHover, setIsHover] = useState(false)
  const linkHoverStyles = isHover
    ? 'bg-blue-400 border-blue-400'
    : 'bg-white border-grey-100'
  const textHoverStyles = isHover ? 'text-white' : 'text-grey-200'
  const valueHoverStyles = isHover ? 'text-white' : 'text-grey-200'
  const buttonHoverStyles = isHover ? 'bg-white' : 'bg-grey-50'

  const handleMouseEnter = () => {
    setIsHover((prevState) => !prevState)
  }

  return (
    <NavLink
      className={`w-full px-5 py-3 border border-solid ${linkHoverStyles} rounded-lg flex items-center justify-between cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
      to={href}
    >
      <p className={`text-base ${textHoverStyles} uppercase font-semibold`}>
        {title}
      </p>
      <div className="flex items-center">
        {num && (
          <span className={`text-base ${valueHoverStyles} font-semibold mr-4`}>
            {num}
          </span>
        )}
        {done ? (
          // <div className="w-5 h-5 bg-green-200 rounded-full"></div>
          <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center">
            <DoneIcon />
          </div>
        ) : (
          <button
            className={`text-xs uppercase text-grey-200 ${buttonHoverStyles} font-semibold rounded py-1 w-16 `}
          >
            {buttonText}
          </button>
        )}
      </div>
    </NavLink>
  )
}