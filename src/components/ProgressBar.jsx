export default function ProgressBar({ percent, styles = "" }) {
  return (
    <div className={`w-full h-4 bg-grey-50 rounded-lg ${styles}`}>
      <div
        className="h-full bg-green-100 relative flex justify-end rounded-lg"
        style={{ width: `${percent}%` }}
      >
        <div className="bg-green-200 flex items-center justify-center h-7 w-16 rounded absolute border border-solid border-white -top-1.5 text-white text-base">
          {percent}%
        </div>
      </div>
    </div>
  )
}