import DragIcon from "../../../icons/DragIcon"
import room from "../../../images/room.jpg"

export default function Card() {
  return (
    <div className="box-content w-[150px] border border-solid border-black">
      <div className="bg-blue-100 w-[150px] flex justify-between items-center px-1">
        <div className="bg-black w-5 h-5 rounded-full flex justify-center items-center">
          <DragIcon />
        </div>
        <p className="text-center font-semibold whitespace-nowrap">
          drag to move
        </p>
        <div className="bg-black w-5 h-5 rounded-full flex justify-center items-center">
          <DragIcon />
        </div>
      </div>
      <img src={room} alt="room" />
      <div className="py-1 px-2">
        <input
          placeholder="Caption"
          className="border-b border-solid border-grey w-full outline-none"
        />
      </div>
    </div>
  )
}