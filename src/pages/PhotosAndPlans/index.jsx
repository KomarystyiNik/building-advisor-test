import Page from "../../components/Layouts/Page"
import BuildingEditForm from "../../components/Layouts/BuildingEditForm"
import DropdownForm from "../../components/Layouts/DropdownForm"
import ImageIcon from "../../icons/ImageIcon"
import { useState } from "react"
import PhotosContainer from "./components/PhotosContainer"
import room from "../../images/room.jpg"
import CameraIcon from "../../icons/CameraIcon"
import AddFileIcon from "../../icons/AddFileIcon"

export default function PhotosAndPlans() {
  const [isCheck, setIsCheck] = useState(false)
  const [data] = useState(Array(11).fill(room))

  const handleInputChange = () => {
    setIsCheck(prevState => !prevState)
  }

  return (
    <Page
      bgColor="bg-white"
      title="Add photos & floor plans for greater buyer and seller engagement"
      tipText="Exterior photos of the building are easy to do yourself on your mobile phone or you can hire a photographer. Visit another listing in the building to get interior and amenity photos."
    >
      <BuildingEditForm>
        <DropdownForm text="Images" icon={<ImageIcon />}>
          <div className="flex space-x-2 items-start">
            <label className="text-md font-semibold flex space-x-2">
              <input
                type="checkbox"
                className="w-5 h-5 mt-1 cursor-pointer"
                onChange={handleInputChange}
              />
              <span className="w-[98%]">
                I hereby confirm that the images being uploaded by me are
                copyright-free images. In the event there is a third-party
                copyright claim in connection with any or all of the images I've
                uploaded, I hereby agree to indemnify Condo.com , its affiliates
                or insurance company (" Condo.com ") against any and all
                liability from such claims and further agree to pay for all
                Condo.com legal fees in connection with defending such copyright
                claims.
              </span>
            </label>
          </div>
          <PhotosContainer
            text="Photos"
            isCheck={isCheck}
            data={data}
            buttonIcon={<CameraIcon />}
          />
          <PhotosContainer
            text="Floor Plans"
            isCheck={isCheck}
            buttonIcon={<AddFileIcon />}
          />
        </DropdownForm>
      </BuildingEditForm>
    </Page>
  )
}