import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import MarketCard, {type Market } from "../components/MarketCard"

const Home = () => {
  const featuredMarkets: Market[] = [
    { id: 1, name: "Bitcoin", symbol: "BTC", description: "BTC/USD", currentPrice: 51234.56, change: 2.34, volume: "$24.5B" },
    { id: 2, name: "Ethereum", symbol: "ETH", description: "ETH/USD", currentPrice: 2845.67, change: -1.23, volume: "$12.3B" },
    { id: 3, name: "BlockDag", symbol: "BDAG", description: "BLOCKDAG/USD", currentPrice: 0.4567, change: 5.67, volume: "$3.2B" },
  ]

  const stats = [
    { value: "$42M+", label: "Total Predictions" },
    { value: "65%", label: "Accuracy Rate" },
    { value: "12.5K", label: "Active Traders" },
    { value: "0.2s", label: "Avg. Settlement" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tight">
            Predict Crypto Markets
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            The next-generation prediction market platform on BlockDag Network. 
            Forecast cryptocurrency prices with precision and earn rewards for accurate predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/markets">
              <Button 
                size="lg" 
                className="btn-primary"
              >
                Explore Markets
              </Button>
            </Link>
            <Link to="/predictions">
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary"
              >
                Start Predicting
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group trading-card p-8 text-center"
              >
                <div className="text-4xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Markets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Featured Markets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Explore the most popular prediction markets and start forecasting price movements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredMarkets.map(market => (
              <div key={market.id} className="transform transition-transform duration-300 hover:scale-105">
                <MarketCard market={market} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/markets">
              <Button 
                variant="outline" 
                className="btn-secondary"
              >
                View All Markets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Start predicting in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: 1, title: "Connect Wallet", description: "Connect your Web3 wallet to access the prediction markets" },
              { step: 2, title: "Choose Market", description: "Select from various cryptocurrency markets to make predictions" },
              { step: 3, title: "Predict & Earn", description: "Make price predictions and earn rewards when they come true" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home