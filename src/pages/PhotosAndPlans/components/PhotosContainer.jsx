import Toggle from "../../../components/Toggle";
import Card from "./Card";

export default function PhotosContainer({ styles, text, buttonIcon, isCheck, data = [] }) {
  const buttonStyles = isCheck && 'hover:bg-grey-100'

  return (
    <div className={`${styles} py-2 border-b border-solid border-b-grey`}>
      <div className="flex justify-between mb-3">
        <p className="text-4xl text-blue-400">{text}</p>
        <button
          className={`uppercase text-grey-200 font-semibold rounded-xl py-3 px-4 flex items-center bg-grey ${buttonStyles}`}
          disabled={!isCheck}
        >
          {buttonIcon}
          &nbsp;add&nbsp;{text}
        </button>
      </div>
      <div className="flex flex-nowrap space-x-2 py-1 overflow-auto max-w-[1454px] min-h-[50px] h-full">
        {data.map((image) => (
          <Card image={image} />
        ))}
      </div>
      <div className="flex items-center justify-end space-x-2 mt-3">
        <Toggle />
        <p className="text-md font-semibold">Allow delete</p>
      </div>
      {data.length > 0 && (
        <div className="flex justify-center mt-5">
          <button className="uppercase bg-green-200 hover:bg-green-100 px-3 py-2 rounded text-white text-md font-bold">
            save&nbsp;{text}
          </button>
        </div>
      )}
    </div>
  )
}