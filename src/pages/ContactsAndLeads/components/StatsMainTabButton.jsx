export default function StatsMainTabButton({ name, text, tabName, onClick }) {
  const styles = tabName === name ? "text-grey-200" : "text-grey-100"
  
  return (
    <button
      name={name}
      className={`text-base hover:text-grey-200 ${styles} font-semibold uppercase`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}