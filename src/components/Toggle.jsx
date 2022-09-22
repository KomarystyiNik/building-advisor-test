import { useState } from "react"

export default function Toggle() {
  const [isCheck, setIsCheck] = useState(false)

  const handleInputChange = () => {
    setIsCheck(prevState => !prevState)
  }

  return (
    <label className="cursor-pointer">
      <input type="checkbox" onChange={handleInputChange} className="hidden" />
      <span
        className={`flex items-center ${isCheck ? "justify-end" : 'justify-start'} w-9 h-3 bg-grey-100 rounded-xl`}
      >
        <span
          className={`inline-block h-5 w-5 ${
            isCheck ? 'bg-blue-400' : 'bg-white'
          } shadow-md rounded-full`}
        />
      </span>
    </label>
  )
}