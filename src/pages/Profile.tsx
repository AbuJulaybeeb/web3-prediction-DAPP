import { useState } from "react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("predictions")
  
  const predictionHistory = [
    { id: 1, market: "BTC/USD", direction: "Up", amount: "10.00", timeframe: "1hr", result: "Won", payout: "18.50" },
    { id: 2, market: "ETH/USD", direction: "Down", amount: "5.00", timeframe: "1day", result: "Lost", payout: "0.00" },
    { id: 3, market: "BLOCKDAG", direction: "Up", amount: "20.00", timeframe: "30min", result: "Won", payout: "37.00" },
  ]

  const transactionHistory = [
    { id: 1, type: "Deposit", amount: "50.00", date: "2023-10-15", status: "Completed" },
    { id: 2, type: "Prediction", amount: "-10.00", date: "2023-10-16", status: "Completed" },
    { id: 3, type: "Withdrawal", amount: "-25.00", date: "2023-10-17", status: "Processing" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent tracking-tight">
          Your Profile
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Account Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Wallet Balance</span>
                <span className="font-semibold text-white">124.75 BLOCKDAG</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Predictions</span>
                <span className="font-semibold text-white">23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Win Rate</span>
                <span className="font-semibold text-white">65%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Won</span>
                <span className="font-semibold text-green-400">86.40 BLOCKDAG</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Lost</span>
                <span className="font-semibold text-red-400">35.00 BLOCKDAG</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Net Profit</span>
                <span className="font-semibold text-green-400">51.40 BLOCKDAG</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Prediction on BTC/USD</span>
                <span className="text-green-400">+8.50 BLOCKDAG</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Prediction on ETH/USD</span>
                <span className="text-red-400">-5.00 BLOCKDAG</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Deposit</span>
                <span className="text-green-400">+50.00 BLOCKDAG</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-6 shadow-xl">
          <div className="flex border-b border-gray-700/50 mb-6">
            <button
              className={`py-3 px-6 font-medium text-sm transition-all duration-300 ${
                activeTab === "predictions"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveTab("predictions")}
            >
              Prediction History
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm transition-all duration-300 ${
                activeTab === "transactions"
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveTab("transactions")}
            >
              Transaction History
            </button>
          </div>
          
          {activeTab === "predictions" ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Prediction History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-4 text-gray-300 font-medium">Market</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Direction</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Amount</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Timeframe</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Result</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Payout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictionHistory.map(prediction => (
                      <tr key={prediction.id} className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/50 transition-all duration-200">
                        <td className="p-4 text-gray-200">{prediction.market}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            prediction.direction === "Up" 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-red-500/20 text-red-400"
                          }`}>
                            {prediction.direction}
                          </span>
                        </td>
                        <td className="p-4 text-gray-200">{prediction.amount} BLOCKDAG</td>
                        <td className="p-4 text-gray-200">{prediction.timeframe}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            prediction.result === "Won" 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-red-500/20 text-red-400"
                          }`}>
                            {prediction.result}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={prediction.result === "Won" ? "text-green-400" : "text-red-400"}>
                            {prediction.payout} BLOCKDAG
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Transaction History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left p-4 text-gray-300 font-medium">Type</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Amount</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Date</th>
                      <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory.map(transaction => (
                      <tr key={transaction.id} className="border-b border-gray-700/50 last:border-0 hover:bg-gray-700/50 transition-all duration-200">
                        <td className="p-4 text-gray-200">{transaction.type}</td>
                        <td className={`p-4 ${transaction.amount.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                          {transaction.amount} BLOCKDAG
                        </td>
                        <td className="p-4 text-gray-200">{transaction.date}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            transaction.status === "Completed" 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile