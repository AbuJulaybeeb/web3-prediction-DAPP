import { Link, useLocation } from "react-router-dom";
import { useWallet } from "../walletcontext";

const Header = () => {
  const location = useLocation();
  const { address, isConnected, connectWallet, disconnect } = useWallet();

  const navItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Markets", path: "/markets", icon: "📈" },
    { name: "Predict", path: "/predictions", icon: "🔮" },
    { name: "Portfolio", path: "/profile", icon: "💼" },
  ];

  return (
    <header className="bg-gray-900/40 backdrop-blur-md border-b border-gray-800/50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 group-hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-bold text-white">B</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors duration-200">
                BlockDag Predict
              </span>
              <span className="text-xs text-gray-300 font-medium">Advanced Prediction Markets</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.path 
                    ? "bg-blue-500/20 text-blue-300" 
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-1.5 border border-gray-700/50">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs text-gray-200 font-medium">BlockDag Network</span>
          </div>
          <div className="flex items-center gap-2">
            {isConnected ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-200 font-medium truncate max-w-[150px]">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""}
                </span>
                <button
                  onClick={disconnect}
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-500/30 transition-all duration-200"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;