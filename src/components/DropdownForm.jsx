import { useState } from "react"
import ArrowBottomIcon from "../icons/ArrowBottomIcon"
import ArrowTopIcon from "../icons/ArrowTopIcon"
import BuildingsIcon from "../icons/BuildingsIcon"
import Input from "./Input"
import TextArea from "./TextArea"
import TipButton from "./TipButton"

export default function DropdownForm() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(prevState => !prevState)
  }
 
  return (
    <div className="w-full">
      <div className="py-3 px-3 bg-blue-600 rounded-t flex justify-between items-center">
        <div className="flex items-center">
          <BuildingsIcon styles="mr-3" />
          <p className="text-white text-xl font-semibold">
            Building Description
          </p>
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
          <Input label="Building Name" styles="mb-5" />
          <TextArea label="Description" rows={5} styles="mb-6" />
          <div className="flex justify-between items-center">
            <TipButton />
            <button className="bg-green-200 uppercase rounded py-2 px-4 text-white text-sm hover:bg-green-100">
              save
            </button>
          </div>
        </div>
      )}
    </div>
  )
}