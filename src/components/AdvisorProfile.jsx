import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import TwitterIcon from '../icons/TwitterIcon'
import profile from "../images/profile.jpg"

export default function AdvisorProfile() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-base font-semibold text-grey-100 uppercase">
          advisor profile
        </p>
        <button className="underline underline-offset-1 text-base text-grey-200 hover:text-blue-500 font-semibold uppercase">
          edit
        </button>
      </div>
      <div className="rounded-xl border border-solid border-grey-100 flex items-center pr-2">
        <div className="w-24.25 h-24.75 mr-3">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full rounded-l-xl"
          />
        </div>
        <div className="mr-4">
          <p className="text-sm text-grey-200 font-semibold mb-1 whitespace-nowrap">
            Richard Swerdlow
          </p>
          <p className="text-xs text-grey-100 font-semibold mb-2">
            Building Advisor
          </p>
          <div className="flex space-x-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <p className="text-blue-400 text-bold text-lg">Condo.com</p>
      </div>
    </div>
  )
}