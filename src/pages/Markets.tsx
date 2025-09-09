import { useState } from "react"
import MarketCard, {type Market } from "../components/MarketCard"

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  
  const allMarkets: Market[] = [
    { id: 1, name: "Bitcoin", symbol: "BTC", description: "BTC/USD", currentPrice: 51234.56, change: 2.34, volume: "$24.5B" },
    { id: 2, name: "Ethereum", symbol: "ETH", description: "ETH/USD", currentPrice: 2845.67, change: -1.23, volume: "$12.3B" },
    { id: 3, name: "BlockDag", symbol: "BDAG", description: "BLOCKDAG/USD", currentPrice: 0.4567, change: 5.67, volume: "$3.2B" },
    { id: 4, name: "Solana", symbol: "SOL", description: "SOL/USD", currentPrice: 102.34, change: 3.45, volume: "$2.1B" },
    { id: 5, name: "Cardano", symbol: "ADA", description: "ADA/USD", currentPrice: 0.5123, change: -0.78, volume: "$1.8B" },
    { id: 6, name: "Polkadot", symbol: "DOT", description: "DOT/USD", currentPrice: 6.789, change: 1.23, volume: "$1.5B" },
    { id: 7, name: "Chainlink", symbol: "LINK", description: "LINK/USD", currentPrice: 18.92, change: 4.56, volume: "$1.2B" },
    { id: 8, name: "Polygon", symbol: "MATIC", description: "MATIC/USD", currentPrice: 0.789, change: -2.34, volume: "$0.9B" },
  ]

  const categories = [
    { id: "all", name: "All Markets" },
    { id: "gaining", name: "Top Gainers" },
    { id: "losing", name: "Top Losers" },
    { id: "volume", name: "High Volume" },
  ]

  const filteredMarkets = allMarkets.filter(market => 
    market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent tracking-tight">
              Prediction Markets
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-md">
              Discover and predict on the hottest crypto markets with precision
            </p>
          </div>
          <div className="w-full md:w-80 mt-6 md:mt-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search markets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "bg-gray-800/50 backdrop-blur-md text-gray-300 hover:bg-blue-500/20 hover:text-white border border-gray-700/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Market grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMarkets.map(market => (
            <div key={market.id} className="transform transition-transform duration-300 hover:scale-105">
              <MarketCard market={market} />
            </div>
          ))}
        </div>

        {filteredMarkets.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-300 font-light text-lg">No markets found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Markets