# Overview

This is a Web3 prediction market DApp built for cryptocurrency price forecasting on the BlockDag network. Users can connect their wallets, analyze market charts, and place predictions on various cryptocurrency price movements across different timeframes. The application features real-time market data visualization, prediction tracking, and user portfolio management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation between pages (Dashboard, Markets, Predictions, Profile)
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent design system
- **State Management**: React Context for wallet connectivity and user session management
- **Data Fetching**: TanStack React Query for efficient API state management and caching

## Web3 Integration
- **Wallet Connectivity**: Wagmi v2 with WalletConnect integration for multi-wallet support
- **Blockchain Interaction**: Viem library for Ethereum-compatible blockchain operations
- **Network Support**: Configured for Ethereum mainnet with extensible multi-chain architecture
- **Smart Contract Integration**: Ethers.js for contract interactions and transaction handling

## Component Architecture
- **UI Components**: Modular Radix UI primitives wrapped in custom components
- **Chart Visualization**: Recharts library for prediction charts and market data visualization
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Design System**: CSS custom properties for theming with dark mode optimization

## Page Structure
- **Home**: Landing page with featured markets and platform statistics
- **Markets**: Market discovery and search functionality
- **Predictions**: Interactive chart analysis and prediction placement interface
- **Profile**: User dashboard with prediction history and portfolio tracking

## State Management
- **Wallet Context**: Centralized wallet connection state using React Context
- **Component State**: Local state management for UI interactions and form handling
- **Query State**: Server state managed through React Query for market data

# External Dependencies

## Blockchain & Web3
- **Wagmi**: Web3 React hooks for wallet connectivity and blockchain interactions
- **Viem**: TypeScript-first Ethereum library for blockchain operations
- **Ethers.js**: Ethereum blockchain interaction library
- **WalletConnect**: Protocol for connecting mobile wallets to dApps

## UI & Visualization
- **Radix UI**: Headless UI components for accessible interface elements
- **Recharts**: Chart library for market data visualization and prediction graphs
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling

## Development Tools
- **TypeScript**: Type safety and enhanced developer experience
- **ESLint**: Code quality and consistency enforcement
- **PostCSS**: CSS processing with Tailwind integration
- **Class Variance Authority**: Component variant management

## Potential Future Integrations
- **Market Data APIs**: Real-time cryptocurrency price feeds
- **BlockDag Network**: Native blockchain integration for prediction markets
- **IPFS**: Decentralized storage for prediction metadata
- **The Graph**: Blockchain data indexing for historical predictions