import React from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { walletConnect } from "@wagmi/connectors";
import { WalletProvider } from "./walletcontext";
import Header from "./components/Header";
import PredictionChart from "./components/PredictionChart";
import MarketCard from "./components/MarketCard";

// Configure wagmi with WalletConnect
const projectId = "YOUR_WALLETCONNECT_PROJECT_ID"; // Replace with your WalletConnect project ID
const config = createConfig({
  chains: [mainnet],
  connectors: [
    walletConnect({ projectId }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

function App() {
  return (
    <WagmiProvider config={config}>
      <WalletProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <Header />
          <main className="container mx-auto py-8">
            {/* Example usage of components */}
            <PredictionChart selectedProduct="BTC" timeframe="1hr" />
            <MarketCard market={{
              id: 1,
              name: "Bitcoin",
              symbol: "BTC",
              description: "Cryptocurrency",
              currentPrice: 50000,
              change: 2.5,
              volume: "1.2M",
            }} />
          </main>
        </div>
      </WalletProvider>
    </WagmiProvider>
  );
}

export default App;