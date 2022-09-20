import { useState } from "react";
import LinkIcon from "../icons/LinkIcon";
import ProgressBar from "./ProgressBar";

export default function BuildingProfileScore() {
  const [value] = useState(470)
  const [percent] = useState(value / 10)

  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-base font-semibold text-grey-100 uppercase">
          building profile score
        </p>
        <button className="underline underline-offset-1 text-base text-grey-200 hover:text-blue-500 font-semibold uppercase flex items-center">
          <LinkIcon styles="mr-2" />
          view
        </button>
      </div>
      <ProgressBar percent={percent} styles="my-5" />
      <p className="text-xs font-semibold text-grey-200">
        Your building score&nbsp;
        <span className="font-bold">{value} / 1000</span>. Adding a description,
        ammenities, and photos will increase the score. We recommend a&nbsp;
        <span className="font-bold">minimum score of 600</span>
      </p>
    </div>
  )
}