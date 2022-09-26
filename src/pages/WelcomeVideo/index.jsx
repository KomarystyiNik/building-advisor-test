import Page from "../../components/Layouts/Page";
import YoutubeIcon from '../../icons/YoutubeIcon'

export default function WelcomeVideo() {
  return (
    <Page
      title="Add a video to showcase your building to buyers & sellers"
      description="Buyers, sellers and search engines love video. Discuss the benefits of living in the building in an honest and authentic way and you will get listings."
      tipText="A video of the building or neighborhood will bring more traffic and leads to your page. It is easy to do yourself on your mobile phone or you can have hire a videographer."
      bgColor="bg-white"
    >
      <div className="mt-20 flex items-center">
        <div className="pr-20 w-1/2">
          <div className="flex flex-col mb-6">
            <label className="text-lg uppercase text-grey-200 space-y-3 flex flex-col mb-6">
              youtube video url
              <input
                placeholder="E.g. https://www.youtube.com/watch?v=aBscD"
                className="border border-solid border-grey-100 rounded py-2 px-3 outline-blue-500 placeholder:text-xl"
              />
            </label>
          </div>
          <button className="bg-green-200 hover:bg-green-100 text-white text-lg text-bold py-3 px-5 rounded uppercase">
            add your video
          </button>
          <div className="flex space-x-7 mt-7 items-center">
            <YoutubeIcon />
            <p className="flex flex-col text-grey-200">
              Currently only supporting Youtube hosted videos.{' '}
              <span>More sources launching soon.</span>
            </p>
          </div>
        </div>
        <embed
          src="https://www.condo.com/"
          className="w-full max-w-[760px] h-[600px]"
        ></embed>
      </div>
    </Page>
  )
}