import NavItem from "./NavItem"

export default function ResidentMarketing() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <p className="text-base font-semibold text-grey-100 uppercase">
          resident marketing
        </p>
        <p className="text-base text-grey-200 font-bold">
          123&nbsp;
          <span className="text-xs font-semibold uppercase">units</span>
        </p>
      </div>
      <div className="space-y-3">
        <NavItem title="listing presentation" num={12} done buttonText="send" />
        <NavItem title="postcards" num={"10 / mo"} done buttonText="send" />
        <NavItem title="social posts" num={12} buttonText="post" />
        <NavItem title="building reports" num={12} buttonText="share" />
        <NavItem title="announcement letters" num={4} buttonText="share" />
        <NavItem title="activity alerts" num={2} buttonText="share" />
        <NavItem title="building times" num={2} buttonText="share" />
        <NavItem
          title="featured listings"
          num={2}
          buttonText="share"
        />
        <NavItem title="contacts & leads" num={2} buttonText="view"/>
      </div>
    </div>
  )
}