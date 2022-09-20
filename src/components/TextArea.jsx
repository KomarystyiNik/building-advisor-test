export default function TextArea({ label, onChange, name, value, rows, styles="" }) {
  return (
    <div className={`relative w-full h-fit ${styles}`}>
      <label className="absolute text-sm text-grey-200 px-1 bg-grey-50 -top-2.5 left-2 z-10">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="border border-solid border-grey-100 py-4 px-3 rounded w-full focus:outline-blue-600 resize-none text-black font-semibold text-md"
      />
    </div>
  )
}