export default function Button({ text, main }) {
  const styles = main
    ? "border-green-200 bg-green-200 hover:bg-green-100 hover:border-green-100 text-white"
    : "border-grey-100 bg-grey-50 hover:bg-grey-100 text-grey-200"

  return (
    <button
      className={`py-2 border border-solid ${styles}  text-sm font-bold rounded w-full uppercase`}
    >
      {text}
    </button>
  )
}