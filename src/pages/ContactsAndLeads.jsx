import StatsMainItem from "../components/StatsMainItem";
import TabButton from "../components/TabButton";
import { data } from "../MockData"
import ProjectedStatsItem from "../components/ProjectedStatsItem"
import StatsItem from "../components/StatsItem"
import building from "../images/building.jpg"

export default function ContactsAndLeads() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <img
          src={building}
          className="w-full max-w-247 rounded-xl mr-4"
          alt="building"
        />
        <div className="w-130 rounded-xl bg-white flex flex-col justify-end items-end px-7 py-8">
          <div className="flex items-center space-x-5">
            <p className="text-xl text-grey-200 font-bold text-end flex flex-col uppercase">
              projected&nbsp;<span>building value</span>
            </p>
            <span className="text-5xl text-blue-400 ml-8 font-bold">
              $4,068
            </span>
          </div>
          <p className="text-sm text-grey-200 mt-7 mb-7 w-85">
            Your building`s projected value is a 3x multiple of annual building
            net income. This assumes continued ownership and marketing of the
            building for three years
          </p>
          <div className="flex space-x-6">
            <div>
              <p className="text-xl text-grey-200 font-bold uppercase">
                building units
              </p>
              <span className="text-5xl text-blue-400 font-bold">120</span>
            </div>
            <div>
              <p className="text-xl text-grey-200 font-bold text-end uppercase">
                avg unit price
              </p>
              <span className="text-5xl text-blue-400 font-bold">$400,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-7 py-8 bg-white rounded-lg">
        <p className="text-lg text-grey-200 font-bold mb-9 uppercase">
          resident marketing saturation
        </p>
        <div className="w-5.5/10">
          <div className="h-28 bg-grey-50 mb-9" />
          <div className="flex justify-between">
            <StatsItem text="total leads" value="145" styles="items-start" />
            <StatsItem text="buyers" value="4" styles="items-start" />
            <StatsItem text="seller" value="2" styles="items-start" />
            <StatsItem text="renter" value="24" styles="items-end" />
            <StatsItem text="alerts" value="35" styles="items-end" />
            <StatsItem text="reports" value="23" styles="items-end" />
          </div>
        </div>
      </div>
      <div className="flex my-5 space-x-5 justify-center">
        <TabButton text="summary" />
        <TabButton text="all leads" />
        <TabButton text="buyers" />
        <TabButton text="sellers" />
        <TabButton text="renters" />
        <TabButton text="alerts" />
        <TabButton text="reports" />
      </div>
      <div className="flex justify-between">
        <div className="w-3.2/10 px-8 py-5 bg-white rounded-lg">
          <div className="mb-5">
            <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
              contacts / yr
            </p>
            <div className="flex items-center">
              <span className="text-5xl text-blue-400 font-bold mr-7">123</span>
              <div className="flex w-full h-10">
                <div className="bg-blue-500 w-1/4 rounded-l-md" />
                <div className="bg-blue-300 w-1.5/10" />
                <div className="bg-blue-200 w-1/4" />
                <div className="bg-blue-100 w-1/4" />
                <div className="bg-blue-400 w-1/10 rounded-r-md" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
                response rate
              </p>
              <span className="text-5xl text-blue-400 font-bold mr-7">2%</span>
            </div>
            <div>
              <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
                conversion rate
              </p>
              <span className="text-5xl text-blue-400 font-bold mr-7">10%</span>
            </div>
          </div>
        </div>
        <div className="w-3.2/10 px-8 pb-5 pt-12 bg-white rounded-lg flex flex-col">
          <div className="mb-5 flex items-center self-center">
            <span className="text-6xl text-blue-400 font-bold mr-7">23</span>
            <p className="text-lg text-grey-200 font-bold tracking-wider flex flex-col uppercase">
              projected&nbsp;<span>transactions / yr</span>
            </p>
          </div>
          <div className="flex space-x-16">
            <div>
              <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
                commision
              </p>
              <span className="text-5xl text-blue-400 font-bold mr-7">3%</span>
            </div>
            <div>
              <p className="text-lg text-grey-200 font-bold mb-3 tracking-wider uppercase">
                agent split
              </p>
              <span className="text-5xl text-blue-400 font-bold mr-7">80%</span>
            </div>
          </div>
        </div>
        <div className="w-3.2/10 px-8 py-5 bg-white rounded-lg flex flex-col justify-between">
          <ProjectedStatsItem text="revenue" value="$2,304" />
          <ProjectedStatsItem text="marketing" value="($948)" />
          <ProjectedStatsItem text="net income" value="$1,356" />
        </div>
      </div>
      <div className="space-y-5 mt-5">
        {data.map((item, index) => (
          <StatsMainItem data={item} key={index} />
        ))}
      </div>
    </div>
  )
}