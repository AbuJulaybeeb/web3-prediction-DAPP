import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useWallet } from "./WalletConnect"; // Ensure this import is correct

interface ChartData {
  time: string;
  price: number;
  type: "historical" | "current" | "prediction";
}

interface PredictionChartProps {
  selectedProduct: string;
  timeframe: string;
}

// Rest of the file remains the same

const PredictionChart = ({ selectedProduct, timeframe }: PredictionChartProps) => {
  const { address, isConnected, connectWallet } = useWallet();
  const [data, setData] = useState<any[]>([]);
  const [prediction, setPrediction] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateData = () => {
      setLoading(true);
      const now = new Date();
      const mockData = [];
      const mockPrediction = [];
      
      let currentPrice = 50000;
      for (let i = 30; i > 0; i--) {
        const time = new Date(now.getTime() - i * 60000);
        const change = (Math.random() - 0.5) * 200;
        currentPrice += change;
        
        mockData.push({
          time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          price: currentPrice,
          type: 'historical'
        });
      }
      
      mockData.push({
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        price: currentPrice,
        type: 'current'
      });
      
      const predictionPoints = timeframe === '1min' ? 1 : 
                              timeframe === '15min' ? 15 : 
                              timeframe === '30min' ? 30 : 
                              timeframe === '1hr' ? 60 : 
                              timeframe === '1day' ? 1440 : 43200;
      
      let trend = Math.random() > 0.5 ? 1 : -1;
      let lastPrice = currentPrice;
      
      for (let i = 1; i <= 10; i++) {
        const predictionTime = new Date(now.getTime() + i * predictionPoints * 60000 / 10);
        const change = (Math.random() * 2 + 1) * trend;
        lastPrice = lastPrice + change;
        
        mockPrediction.push({
          time: predictionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          price: lastPrice,
          type: 'prediction'
        });
      }
      
      setData(mockData);
      setPrediction(mockPrediction);
      setLoading(false);
    };
    
    generateData();
  }, [selectedProduct, timeframe]);

  const allData = [...data, ...prediction];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-700/50 transform transition-all duration-200">
          <p className="text-gray-300 text-sm font-medium">{label}</p>
          <p className="font-semibold text-xl text-white">
            ${payload[0].value.toFixed(2)}
          </p>
          <p className="text-xs text-gray-400 capitalize">
            {payload[0].payload.type}
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="h-96 flex items-center justify-center bg-gray-900/50 rounded-2xl">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-emerald-400"></div>
          <p className="mt-3 text-gray-300 font-medium">Loading chart data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-96 bg-gray-900/50 rounded-2xl p-6 shadow-xl border border-gray-800/50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {selectedProduct} Price Chart
        </h3>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-300 font-medium bg-gray-800/50 px-3 py-1 rounded-full">
            {timeframe} prediction
          </div>
          {isConnected ? (
            <span className="text-sm text-gray-200 font-medium truncate max-w-[150px]">
              {address ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : ""}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={allData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" opacity={0.5} />
          <XAxis 
            dataKey="time" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickMargin={10}
            stroke="#4b5563"
            fontFamily="Inter, sans-serif"
          />
          <YAxis 
            domain={['dataMin - 100', 'dataMax + 100']}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tickMargin={10}
            stroke="#4b5563"
            fontFamily="Inter, sans-serif"
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4b5563', strokeWidth: 1 }} />
          
          <Area 
            type="monotone" 
            dataKey="price" 
            data={data}
            stroke="#10b981" 
            strokeWidth={2}
            fill="url(#colorHistorical)"
            dot={false}
            activeDot={{ r: 5, fill: '#10b981', stroke: '#059669', strokeWidth: 2 }}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
          
          <Area 
            type="monotone" 
            dataKey="price" 
            data={prediction}
            stroke="#8b5cf6" 
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#colorPrediction)"
            dot={false}
            activeDot={{ r: 5, fill: '#8b5cf6', stroke: '#7c3aed', strokeWidth: 2 }}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="flex justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-emerald-400 rounded"></div>
          <span className="text-sm text-gray-300 font-medium">Historical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-purple-400 rounded border border-dashed border-purple-300"></div>
          <span className="text-sm text-gray-300 font-medium">Prediction</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;