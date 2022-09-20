import LeadsItem from "./LeadsItem";

export default function Leads({ buyers, sellers, renters, alerts, reports }) {
  return (
    <div className="w-full flex items-center mb-5 space-x-6">
      <LeadsItem text="buyers" value={buyers} />
      <LeadsItem text="sellers" value={sellers} />
      <LeadsItem text="renters" value={renters} />
      <LeadsItem text="alerts" value={alerts} />
      <LeadsItem text="reports" value={reports} />
    </div>
  )
}