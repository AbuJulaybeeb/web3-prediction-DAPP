import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useWallet } from "../walletcontext";

export interface Market {
  id: number;
  name: string;
  symbol: string;
  description: string;
  currentPrice: number;
  change: number;
  volume: string;
}

export interface MarketCardProps {
  market: Market;
}

const MarketCard = ({ market }: MarketCardProps) => {
  const { address, isConnected, connectWallet } = useWallet();

  return (
    <div className="relative overflow-hidden rounded-2xl p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700/50">
              <span className="text-xl font-semibold text-white">{market.symbol}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{market.name}</h3>
              <p className="text-sm text-gray-300 font-medium mt-1">{market.description}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-white tracking-tight">
            ${market.currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className={`flex items-center text-sm font-semibold ${market.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {market.change >= 0 ? (
                <svg className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              {Math.abs(market.change).toFixed(2)}%
            </div>
            <div className="text-xs text-gray-300 font-medium">Vol: {market.volume}</div>
          </div>
          <div className="mt-4">
            {isConnected ? (
              <span className="text-sm text-gray-200 font-medium truncate max-w-full">
                Connected: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""}
              </span>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 w-full"
              >
                Connect Wallet to Trade
              </button>
            )}
          </div>
        </div>
        
        <Link to="/predictions" className="block w-full">
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300">
            <span className="mr-2">📈</span>
            Predict Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MarketCard;