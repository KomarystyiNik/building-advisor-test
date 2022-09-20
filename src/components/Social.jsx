import CalendarIcon from "../icons/CalendarIcon";
import NotificationIcon from "../icons/NotificationIcon";

export default function Social({calendars, notifications}) {
  return (
    <div className="flex space-x-10">
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-green-200 font-bold">{calendars}</span>
        <CalendarIcon />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-green-200 font-bold">
          {notifications}
        </span>
        <NotificationIcon />
      </div>
    </div>
  )
}