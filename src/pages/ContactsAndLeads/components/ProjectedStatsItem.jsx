export default function ProjectedStatsItem({text, value}) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-lg text-grey-200 font-bold tracking-wider text-end flex flex-col max-w-47.5 w-full uppercase">
        projected&nbsp;<span>{text}&nbsp;/ yr</span>
      </p>
      <span className="text-4xl text-blue-400 font-bold">{value}</span>
    </div>
  )
}