import DropdownForm from "../components/DropdownForm";
import GraphIcon from "../icons/GraphIcon";

export default function DescriptionAndAmenities() {
  return (
    <div className="mt-20">
      <div className="flex justify-center relative py-3 bg-grey shadow-md">
        <button className="absolute left-4 uppercase text-black hover:text-grey-200 text-base font-semibold">
          Back
        </button>
        <p className="text-lg text-grey-200 font-semibold">Building Edit</p>
      </div>
      <div className="px-5 py-8 flex flex-col items-center border-solid border-b border-x border-x-grey">
        <h3 className="text-black text-2xl font-medium mb-5">
          840 North Lake Shore Drive Condo
        </h3>
        <p className="text-grey-200 text-sm">
          <span className="font-bold">User:</span>rich@condo.com
        </p>
        <table className="w-7/10">
          <tr className="border-b border-solid border-grey-100">
            <td className="text-black text-base font-medium py-3">ID</td>
            <td className="text-black text-base font-medium py-3">Curator</td>
            <td className="text-black text-base font-medium py-3">
              Updated (Ver)
            </td>
            <td className="text-black text-base font-medium py-3">
              Published (Ver)
            </td>
            <td className="text-black text-base font-medium">Action</td>
          </tr>
          <tr className="border-b border-solid border-grey-100">
            <td className="text-black text-base font-normal py-3">41751863</td>
            <td className="text-black text-base font-normal py-3">
              rich@condo.com
            </td>
            <td className="py-3">
              <div className="text-black text-base font-normal flex flex-col">
                <span>05-12-2022 (5)</span>
                <button className="text-green-100 underline underline-offset-1 w-fit hover:text-green-200 flex items-center">
                  <GraphIcon styles="mr-1" />
                  Score
                </button>
              </div>
            </td>
            <td className="py-3">
              <div className="text-black text-base font-normal flex flex-col">
                12-09-2021 (4)
                <button className="text-green-100 underline underline-offset-1 w-fit hover:text-green-200 flex items-center">
                  <GraphIcon styles="mr-1" />
                  Score
                </button>
              </div>
            </td>
            <td className="py-3">
              <div className="flex items-center space-x-2">
                <button className="text-base text-indigo-700 hover:text-blue-500 font-semibold underline underline-offset-1">
                  Preview
                </button>
                <div className="h-4  w-0.25 bg-grey-200" />
                <button className="text-base text-indigo-700 hover:text-blue-500 font-semibold underline underline-offset-1">
                  View Live
                </button>
              </div>
            </td>
          </tr>
        </table>
        <div className="space-x-4 mt-6 mb-6">
          <button className="bg-green-200 hover:bg-green-100 uppercase rounded py-2 px-4 text-white text-sm">
            save
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 uppercase rounded py-2 px-4 text-white text-sm">
            publish
          </button>
        </div>
        <DropdownForm />
      </div>
    </div>
  )
}