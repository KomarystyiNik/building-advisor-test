import Page from "../../components/Layouts/Page"
import BuildingEditForm from "../../components/Layouts/BuildingEditForm"
import DropdownForm from "../../components/Layouts/DropdownForm"
import Card from "./components/Card"
import Toggle from "../../components/Toggle"
import ImageIcon from "../../icons/ImageIcon"
import CameraIcon from "../../icons/CameraIcon"

export default function PhotosAndPlans() {
  return (
    <Page
      bgColor="bg-white"
      title="Add photos & floor plans for greater buyer and seller engagement"
      tipText="Exterior photos of the building are easy to do yourself on your mobile phone or you can hire a photographer. Visit another listing in the building to get interior and amenity photos."
    >
      <BuildingEditForm>
        <DropdownForm text="Images" icon={<ImageIcon />}>
          <div className="flex space-x-2 items-start">
            <input type="checkbox" className="w-5 h-5 mt-1 cursor-pointer" />
            <label className="w-fit text-md font-semibold">
              I hereby confirm that the images being uploaded by me are
              copyright-free images. In the event there is a third-party
              copyright claim in connection with any or all of the images I've
              uploaded, I hereby agree to indemnify Condo.com , its affiliates
              or insurance company (" Condo.com ") against any and all liability
              from such claims and further agree to pay for all Condo.com legal
              fees in connection with defending such copyright claims.
            </label>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-3">
              <p className="text-4xl text-blue-400">Photos</p>
              <button className="uppercase text-grey-200 hover:bg-grey-100 font-semibold bg-grey rounded-xl py-3 px-4 flex items-center">
                <CameraIcon />
                &nbsp;add photos
              </button>
            </div>
            <div className="flex flex-nowrap space-x-2 py-1 overflow-auto max-w-[1454px]">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-2 mt-3">
            <Toggle />
            <p className="text-md font-semibold">Allow delete</p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="uppercase bg-green-200 hover:bg-green-100 px-3 py-2 rounded text-white text-md font-bold">
              save photos
            </button>
          </div>
        </DropdownForm>
      </BuildingEditForm>
    </Page>
  )
}