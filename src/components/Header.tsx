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
    <header className="bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent group-hover:shadow-lg transition-all duration-300">
              <span className="text-xl font-bold text-white">B</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                BlockDag Predict
              </span>
              <span className="text-xs text-muted-foreground font-medium">Advanced Prediction Markets</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  location.pathname === item.path 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-card rounded-full px-3 py-1.5 border border-border">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-xs text-card-foreground font-medium">BlockDag Network</span>
          </div>
          <div className="flex items-center gap-2">
            {isConnected ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground font-medium truncate max-w-[150px]">
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""}
                </span>
                <button
                  onClick={disconnect}
                  className="btn-destructive text-xs px-3 py-1"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="btn-primary text-sm px-4 py-1.5"
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