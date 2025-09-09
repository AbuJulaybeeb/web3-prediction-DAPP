import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";// Assuming wagmi for WalletConnect

interface WalletContextType {
  address: string | undefined;
  isConnected: boolean;
  connectWallet: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = () => {
    if (connectors[0]) {
      connect({ connector: connectors[0] }); // Use the first connector (e.g., WalletConnect)
    }
  };

  return (
    <WalletContext.Provider value={{ address, isConnected, connectWallet, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};