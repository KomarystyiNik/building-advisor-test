export default function LeadsItem({text, value}) {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <span className="text-lg text-grey-200 font-semibold uppercase">
        {text}
      </span>
      <div className="flex items-center space-x-4">
        <span className="text-4xl text-grey-200 font-bold">{value}</span>
      </div>
    </div>
  )
}