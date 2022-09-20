import { useState } from "react"
import LighbulbIcon from "../icons/LightbulbIcon"

export default function TipButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className="relative w-fit">
      {isOpen && (
        <div className="absolute z-10 bg-white px-5 py-4 w-48 bottom-6">
          <span className="text-md">
            The best tips you can find&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com"
              className="text-indigo-700 underline underline-offset-1"
            >
              here
            </a>
          </span>
        </div>
      )}
      <button
        onClick={handleButtonClick}
        className="text-grey-100 text-base hover:text-black flex items-center"
      >
        <LighbulbIcon styles="mr-2"/>
        Curation Tips
      </button>
    </div>
  )
}