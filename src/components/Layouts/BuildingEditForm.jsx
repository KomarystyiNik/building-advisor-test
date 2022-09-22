export default function BuildingEditForm({children}) {
  return (
    <div className="mt-20">
      <div className="flex justify-center relative py-3 bg-grey shadow-md">
        <button className="absolute left-4 uppercase text-black hover:text-grey-200 text-base font-semibold">
          Back
        </button>
        <p className="text-lg text-grey-200 font-semibold">Building Edit</p>
      </div>
      <div className="px-5 py-2 flex flex-col items-center border-solid border-b border-x border-x-grey">
        {children}
      </div>
    </div>
  )
}