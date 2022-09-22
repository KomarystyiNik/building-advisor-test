import DropdownForm from "../../components/Layouts/DropdownForm";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import GraphIcon from "../../icons/GraphIcon";
import TipButton from "./components/TipButton";
import BuildingsIcon from '../../icons/BuildingsIcon'
import BuildingEditForm from "../../components/Layouts/BuildingEditForm";
import Page from "../../components/Layouts/Page";

export default function DescriptionAndAmenities() {
  return (
    <Page
      bgColor="bg-white"
      title="An enchanced description and amenity list accurately shawcases your building to buyers and sellers"
      tipText="A unique building description will bring more search traffic and leads to your page. We recommend a minimum of 300 words, but the longer the better for best results."
    >
      <BuildingEditForm>
        <h3 className="text-black text-2xl font-medium mb-5 mt-7">
          840 North Lake Shore Drive Condo
        </h3>
        <p className="text-grey-200 text-sm">
          <span className="font-bold">User:</span>rich@condo.com
        </p>
        <table className="w-7/10">
          <thead>
            <tr className="border-b border-solid border-grey-100">
              <th className="text-black text-start text-base font-medium py-3">ID</th>
              <th className="text-black text-start text-base font-medium py-3">Curator</th>
              <th className="text-black text-start text-base font-medium py-3">
                Updated (Ver)
              </th>
              <th className="text-black text-start text-base font-medium py-3">
                Published (Ver)
              </th>
              <th className="text-black text-start text-base font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-solid border-grey-100">
              <td className="text-black text-base font-normal py-3">
                41751863
              </td>
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
          </tbody>
        </table>
        <div className="space-x-4 mt-6 mb-6">
          <button className="bg-green-200 hover:bg-green-100 uppercase rounded py-2 px-4 text-white text-sm">
            save
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 uppercase rounded py-2 px-4 text-white text-sm">
            publish
          </button>
        </div>
        <DropdownForm
          icon={<BuildingsIcon />}
          text="Building Description"
          styles="mb-7"
        >
          <Input label="Building Name" styles="mb-5" />
          <TextArea label="Description" rows={5} styles="mb-6" />
          <div className="flex justify-between items-center">
            <TipButton />
            <button className="bg-green-200 uppercase rounded py-2 px-4 text-white text-sm hover:bg-green-100">
              save
            </button>
          </div>
        </DropdownForm>
      </BuildingEditForm>
    </Page>
  )
}