export default function DetailedProgressBar({
  includedValue,
  additionalValue,
  maxValue,
  styles = ""
}) {
  const widthSecondaryProgress = (includedValue * 100) / maxValue
  const currentValue = includedValue + additionalValue
  const widthMainProgress = (currentValue * 100) / maxValue

  return (
    <div className={`w-full h-4 bg-grey-50 rounded-lg relative ${styles}`}>
      <div
        style={{ width: `${widthSecondaryProgress}%` }}
        className="bg-green-200 h-full rounded-lg z-10 left-0 absolute"
      />
      <div
        className="h-full bg-green-100 relative flex rounded-lg justify-between"
        style={{
          width: `${widthMainProgress}%`
        }}
      >
        <div className="bg-green-200 flex items-center justify-center h-7 w-16 rounded absolute right-0 border border-solid border-white -top-1.5 text-white text-base z-20">
          {currentValue}
        </div>
      </div>
      <div className="bg-grey-200 flex items-center justify-center h-7 w-16 rounded absolute right-0 border border-solid border-white -top-1.5 text-white text-base">
        {maxValue}
      </div>
    </div>
  )
}
