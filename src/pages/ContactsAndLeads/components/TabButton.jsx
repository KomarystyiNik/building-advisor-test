export default function TabButton({text}) {
  return (
    <button className="bg-grey text-grey-200 font-bold text-lg rounded-lg px-10 py-5 border border-solid border-grey hover:bg-white hover:border-blue-400 uppercase">
      {text}
    </button>
  )
}