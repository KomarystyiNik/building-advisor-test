export default function StatsItem({text, value, styles}) {
  return <div className={`flex flex-col ${styles}`}>
    <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
      {text}
    </p>
    <span className="text-5xl text-blue-400 font-bold">{value}</span>
  </div>
}