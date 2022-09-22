import NotificationIcon from '../../../icons/NotificationIcon'
import ProfileIcon from "../../../icons/ProfileIcon";

export default function Email({ persons, notifications, estimatedDate = 'Realtime Updates' }) {
  return (
    <div className="flex items-center space-x-10">
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-green-200 font-bold">{persons}</span>
        <ProfileIcon />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-green-200 font-bold">
          {notifications}
        </span>
        <NotificationIcon />
      </div>
      <div className="space-y-1 flex flex-col">
        <span className="text-grey-100 font-semibold text-sm uppercase">
          estimated email date
        </span>
        <span className="text-grey-200 font-bold text-md">{estimatedDate}</span>
      </div>
    </div>
  )
}
