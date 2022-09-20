import DetailedProgressBar from "./DetailedProgressBar";

export default function Print({includedValue, additionalValue, isButton = false}) {
  return (
    <div className="max-w-145">
      <DetailedProgressBar
        includedValue={includedValue}
        additionalValue={additionalValue}
        maxValue={110}
      />
      <div className="flex items-end space-x-7">
        <div className="flex justify-between mt-4 w-full">
          <div>
            <p className="text-sm text-green-200 font-semibold uppercase">
              included
            </p>
            <div className="space-x-3">
              <span className="text-sm text-green-200 font-semibold">
                {includedValue}&nbsp;<span className="text-grey-100">/ mo</span>
              </span>
              <span className="text-sm text-green-200 font-semibold uppercase">
                free
              </span>
            </div>
          </div>
          <div className="h-10 w-0.25 bg-grey-100" />
          <div>
            <p className="text-sm text-green-100 font-semibold uppercase">
              additional
            </p>
            <div className="space-x-3">
              <span className="text-sm text-green-100 font-semibold">
                {additionalValue}&nbsp;
                <span className="text-grey-100">/ mo</span>
              </span>
              <span className="text-sm text-green-200 font-semibold">
                + $85
              </span>
            </div>
          </div>
          <div className="h-10 w-0.25 bg-grey-100" />
          <div>
            <p className="text-sm text-grey-200 font-semibold uppercase">
              total
            </p>
            <div className="space-x-3">
              <span className="text-sm text-grey-200 font-semibold">
                {additionalValue + includedValue}&nbsp;
                <span className="text-grey-100">/ mo</span>
              </span>
              <span className="text-sm text-green-200 font-semibold">$85</span>
            </div>
          </div>
        </div>
        {isButton && (
          <button className="px-3 py-2 bg-blue-400 rounded text-xs text-white whitespace-nowrap uppercase">
            request increase
          </button>
        )}
      </div>
    </div>
  )
}