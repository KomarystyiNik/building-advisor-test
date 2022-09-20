import CalendarIcon from "../icons/CalendarIcon";

export default function Listings({ included, additional, total }) {
  return (
    <div className="w-full flex items-center mb-4 space-x-8">
      <div className="space-y-4 flex flex-col items-center">
        <span className="text-lg text-grey-200 font-semibold uppercase">
          included
        </span>
        <div className="flex items-center space-x-4">
          <span className="text-4xl text-grey-200 font-bold">{included}</span>
          <CalendarIcon />
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <span className="text-lg text-green-100 font-semibold uppercase">
          additional
        </span>
        <div className="flex items-center space-x-4">
          <span className="text-4xl text-green-200 font-bold">
            {additional}
          </span>
          <CalendarIcon />
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-start">
        <span className="text-lg text-grey-200 font-semibold uppercase">
          total
        </span>
        <span className="text-4xl text-green-200 font-bold uppercase">
          {total}
        </span>
      </div>
    </div>
  )
}