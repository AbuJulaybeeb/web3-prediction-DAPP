import { useState } from "react"
import PredictionChart from "../components/PredictionChart"
import TimeframeSelector from "../components/TimeframeSelector"

const Predictions = () => {
  const [selectedProduct, setSelectedProduct] = useState("BTC/USD")
  const [timeframe, setTimeframe] = useState("1hr")
  const [predictionAmount, setPredictionAmount] = useState("")
  const [predictionType, setPredictionType] = useState<"up" | "down">("up")

  const products = [
    { name: "BTC/USD", label: "Bitcoin" },
    { name: "ETH/USD", label: "Ethereum" },
    { name: "BLOCKDAG/USD", label: "BlockDag" },
    { name: "SOL/USD", label: "Solana" },
    { name: "ADA/USD", label: "Cardano" },
    { name: "DOT/USD", label: "Polkadot" }
  ]

  const handlePlacePrediction = () => {
    alert(`Prediction placed: ${predictionType} for ${selectedProduct} in ${timeframe} with amount ${predictionAmount}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="text-center sm:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent tracking-tight">
                  Market Predictions
                </h1>
                <p className="text-lg text-gray-300 font-light max-w-md">
                  Analyze trends and make predictions on market movements
                </p>
              </div>
              
              <div className="mt-6 sm:mt-0">
                <label htmlFor="product-select" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Market
                </label>
                <select
                  id="product-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full sm:w-64 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                >
                  {products.map(product => (
                    <option key={product.name} value={product.name}>{product.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Timeframe selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">Prediction Timeframe</label>
              <TimeframeSelector timeframe={timeframe} setTimeframe={setTimeframe} />
            </div>
            
            {/* Chart */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-700/50">
              <PredictionChart selectedProduct={selectedProduct} timeframe={timeframe} />
            </div>
          </div>
          
          {/* Prediction panel */}
          <div className="lg:w-1/3">
            <div className="trading-card p-6 sticky top-6 bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Place Your Prediction</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Prediction Direction</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPredictionType("up")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        predictionType === "up" 
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25" 
                          : "bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-green-500/20 hover:text-white"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Up
                    </button>
                    <button
                      onClick={() => setPredictionType("down")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        predictionType === "down" 
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25" 
                          : "bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-red-500/20 hover:text-white"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Down
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-3">
                    Amount (BDAG)
                  </label>
                  <div className="relative">
                    <input
                      id="amount"
                      type="number"
                      value={predictionAmount}
                      onChange={(e) => setPredictionAmount(e.target.value)}
                      className="w-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-gray-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-gray-400 text-sm">BDAG</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 text-sm">Potential Payout</span>
                    <span className="font-semibold text-white">
                      {predictionAmount ? (parseFloat(predictionAmount) * 1.85).toFixed(2) : "0.00"} BDAG
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Probability</span>
                    <span>65%</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>Fee</span>
                    <span>1.5%</span>
                  </div>
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handlePlacePrediction}
                  disabled={!predictionAmount}
                >
                  Place Prediction
                </button>
                
                <div className="text-xs text-gray-400 text-center">
                  By placing a prediction, you agree to our terms of service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Predictions