import LinkIcon from "../icons/LinkIcon"
import NavItem from "./NavItem"

export default function BuildingProfile() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-base font-semibold text-grey-100 uppercase">
          building profile
        </p>
        <button className="underline underline-offset-1 text-base text-grey-200 hover:text-blue-500 font-semibold uppercase flex items-center">
          <LinkIcon styles="mr-2"/>
          view
        </button>
      </div>
      <div className="space-y-3">
        <NavItem title="Description & Amenities" done />
        <NavItem title="Photos & Floors plans" num={12} done />
        <NavItem title="welcome video" buttonText="upload" />
        <NavItem title="building review" done />
      </div>
    </div>
  )
}