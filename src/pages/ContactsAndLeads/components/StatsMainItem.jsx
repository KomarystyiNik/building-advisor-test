import { useEffect, useState } from "react";
import Email from "./Email";
import Leads from "./Leads";
import Listings from "./Listings";
import Print from "./Print";
import Social from "./Social";
import Button from "./Button"
import StatsMainTabButton from "./StatsMainTabButton";

export default function StatsMainItem({ data }) {
  const [tabName, setTabName] = useState("")

  useEffect(() => {
    if (data.email) {
      setTabName("email") 
      return
    }

    if (data.social) {
      setTabName("social")
      return
    }

    if (data.print) {
      setTabName("print")
      return
    }
  }, [data])

  const handleTabButtonClick = (event) => {
    setTabName(event.target.name)
  }

  return (
    <div className="w-full bg-white rounded-lg flex justify-between items-center px-10 h-38 relative">
      {data.comingSoon && (
        <>
          <div className="top-0 left-0 bottom-0 right-0 bg-grey absolute z-30 opacity-50" />
          <div className="bg-white w-40 flex justify-center py-3 rounded absolute right-8 top-11 z-40">
            <span className="text-lg text-grey-100 font-semibold uppercase">
              coming soon
            </span>
          </div>
        </>
      )}
      <p className="text-xl text-grey-200 font-bold max-w-40 uppercase">
        {data.title}
      </p>
      <div className="flex space-x-10">
        <div className="space-y-2">
          <p className="text-lg text-grey-200 font-semibold">
            {data.type === "sale" ? "RESPONSE RATE" : "VIEWS"}
          </p>
          <div className="w-28 px-5 py-3 bg-grey-50 text-grey-200 text-3xl font-bold rounded-xl">
            {data.views || data.rate || "N/A"}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-lg text-grey-200 font-semibold">
            {data.type === "sale" ? "SELLER CONVERSION" : "TRAFFIC CONVERSION"}
          </p>
          <div className="w-28 px-5 py-3 bg-grey-50 text-grey-200 text-3xl font-bold rounded-xl">
            {data.conversion || "N/A"}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-between items-center">
        {data.type === "sale" && (
          <>
            <div className="w-full pt-5 flex flex-col justify-start h-35">
              {data.type === "sale" && (
                <div className="flex space-x-4 mb-3">
                  {data.email && (
                    <StatsMainTabButton
                      name="email"
                      onClick={handleTabButtonClick}
                      text="email"
                      tabName={tabName}
                    />
                  )}
                  {data.social && (
                    <StatsMainTabButton
                      name="social"
                      onClick={handleTabButtonClick}
                      text="social"
                      tabName={tabName}
                    />
                  )}
                  {data.print && (
                    <StatsMainTabButton
                      name="print"
                      onClick={handleTabButtonClick}
                      text="print"
                      tabName={tabName}
                    />
                  )}
                </div>
              )}
              {tabName === "print" && (
                <Print
                  includedValue={data.print.included}
                  additionalValue={data.print.additional}
                />
              )}
              {tabName === "social" && (
                <Social
                  calendars={data.social.calendars}
                  notifications={data.social.notifications}
                />
              )}
              {tabName === "email" && (
                <Email
                  persons={data.email.persons}
                  notifications={data.email.notifications}
                  estimatedDate={data.email.estimatedDate}
                />
              )}
            </div>
            {(tabName === "social" || tabName === "email") && (
              <div className="space-y-2 flex flex-col justify-center w-44">
                <Button text="preview" />
                <Button text="add reception" main />
              </div>
            )}
          </>
        )}
        {data.type === "views" && (
          <>
            {data.listings && (
              <Listings
                included={data.listings.included}
                additional={data.listings.additional}
                total={data.listings.total}
              />
            )}
            {data.leads && (
              <Leads
                buyers={data.leads.buyers}
                sellers={data.leads.sellers}
                renters={data.leads.renters}
                alerts={data.leads.alerts}
                reports={data.leads.reports}
              />
            )}
            {
              <div className="flex flex-col justify-center w-44">
                {data.listings && <Button text="featured listing" main />}
                {data.leads && <Button text="view building" />}
              </div>
            }
          </>
        )}
      </div>
    </div>
  )
}