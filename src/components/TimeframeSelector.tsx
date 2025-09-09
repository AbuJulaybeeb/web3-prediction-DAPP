interface TimeframeSelectorProps {
  timeframe: string
  setTimeframe: (timeframe: string) => void
}

const TimeframeSelector = ({ timeframe, setTimeframe }: TimeframeSelectorProps) => {
  const timeframes = [
    { label: "1M", value: "1min", full: "1 Minute" },
    { label: "15M", value: "15min", full: "15 Minutes" },
    { label: "30M", value: "30min", full: "30 Minutes" },
    { label: "1H", value: "1hr", full: "1 Hour" },
    { label: "1D", value: "1day", full: "1 Day" },
    { label: "1Mo", value: "1month", full: "1 Month" },
  ]

  return (
    <div className="inline-flex rounded-xl bg-gray-800/50 backdrop-blur-md p-1 border border-gray-700/50 shadow-lg" role="group">
      {timeframes.map((tf) => (
        <button
          key={tf.value}
          type="button"
          title={tf.full}
          className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
            timeframe === tf.value 
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20" 
              : "text-gray-300 hover:text-white hover:bg-gray-700/50"
          }`}
          onClick={() => setTimeframe(tf.value)}
        >
          {tf.label}
        </button>
      ))}
    </div>
  )
}

export default TimeframeSelector