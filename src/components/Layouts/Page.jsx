import AdviceIcon from "../../icons/AdviceIcon";
import BackIcon from "../../icons/BackIcon";
import AdvisorProfile from "../AdvisorProfile";
import BuildingProfile from "../BuildingProfile";
import BuildingProfileScore from "../BuildingProfileScore";
import ResidentMarketing from "../ResidentMarketing";

export default function Page({children, title, description, tipText, bgColor}) {
  return (
    <div className="flex py-2 px-2">
      <div className="bg-blue-400 w-16 fixed left-0 top-0 bottom-0" />
      <div
        className={`w-full max-w-full ${bgColor} rounded-xl mr-4 ml-18 px-12 py-10`}
      >
        <div className="flex justify-between relative mb-20">
          <button className="text-xl text-grey-200 hover:text-blue-500 font-semibold relative -left-[15px] flex items-center">
            <BackIcon styles="mr-5" />
            BACK TO DASHBOARD
          </button>
          <div className="flex space-x-5">
            <button className="text-xl text-grey-200 bg-grey-50 py-2 px-4 rounded hover:text-blue-500 font-semibold">
              PREVIOUS
            </button>
            <button className="text-xl text-grey-200 bg-grey-50 py-2 px-4 rounded hover:text-blue-500 font-semibold">
              NEXT
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-3/5">
            <h2 className="text-2xl text-grey-200 font-semibold mb-4">
              RESIDENT MARKETING
            </h2>
            <h1 className="text-6xl font-bold text-blue-400 mb-4">{title}</h1>
            {description && (
              <p className="text-lg text-grey-200 font-semibold w-7/10">
                {description}
              </p>
            )}
          </div>
          <div className="py-3 px-4 bg-blue-100 w-3/10 rounded flex items-start justify-between">
            <div className="mr-1">
              <p className="text-2xl text-blue-400 font-medium mb-4">
                HELPFUL TIP
              </p>
              <p className="max-w-85 text-md text-grey-200 font-semibold">
                {tipText}
              </p>
            </div>
            <AdviceIcon />
          </div>
        </div>
        {children}
      </div>
      <div className="space-y-4 w-96">
        <div className="bg-white px-6 py-4 rounded-xl">
          <div className="flex justify-between">
            <p className="text-base text-grey-200 font-semibold">
              LISTING ACQUISITION CAMPAIGN
            </p>
            <span className="text-base text-green-200 font-bold">Active</span>
          </div>
          <h2 className="text-3xl text-blue-400 font-bold">
            Pilot House Portafino I.
          </h2>
        </div>
        <div className="bg-white px-6 py-4 rounded-xl w-full max-w-100 space-y-5">
          <AdvisorProfile />
          <BuildingProfileScore />
          <BuildingProfile />
          <ResidentMarketing />
        </div>
      </div>
    </div>
  )
}