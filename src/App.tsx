import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "viem/chains";
import { walletConnect } from "@wagmi/connectors";
import { WalletProvider } from "./walletcontext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Markets from "./pages/MarketsPage";
import Predictions from "./pages/Predictions";
import Profile from "./pages/Profile";

// Configure React Query
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <WalletProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/markets" element={<Markets />} />
                  <Route path="/predictions" element={<Predictions />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </WalletProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export default App;