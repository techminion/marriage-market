
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { rishtaStocks, marketNews, getMarketSentiment, RishtaStock, MarketNews } from '@/utils/marketData';
import { playSound } from '@/utils/soundEffects';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import MarqueeText from '@/components/MarqueeText';

const RishtaMarket = () => {
  const [stocks, setStocks] = useState<RishtaStock[]>(rishtaStocks);
  const [marketSentiment, setMarketSentiment] = useState<string>(getMarketSentiment());
  const [selectedNews, setSelectedNews] = useState<MarketNews[]>(marketNews.slice(0, 3));
  
  // Simulate market fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev => prev.map(stock => {
        // Random small fluctuation
        const fluctuation = (Math.random() * 4 - 2);
        const newValue = Math.max(100, stock.value + fluctuation);
        const newChange = parseFloat((stock.change + (fluctuation / 10)).toFixed(1));
        
        // Determine trend
        let trend: "up" | "down" | "stable" = "stable";
        if (newChange > 1) trend = "up";
        else if (newChange < -1) trend = "down";
        
        return {
          ...stock,
          value: newValue,
          change: newChange,
          trend
        };
      }));
      
      // Sometimes play tick sound
      if (Math.random() > 0.7) {
        playSound('CLICK');
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Change market sentiment periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketSentiment(getMarketSentiment());
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return <ArrowUp className="text-green-500" size={16} />;
      case 'down': return <ArrowDown className="text-red-500" size={16} />;
      default: return <Minus className="text-gray-500" size={16} />;
    }
  };
  
  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <Card className="border-retro mb-8 bg-white overflow-hidden">
      <CardHeader className="bg-doordarshan-accent text-black">
        <CardTitle className="text-center text-2xl font-retro">
          Rishta Market Index™
        </CardTitle>
        <CardDescription className="text-black text-center">
          Live updates from India's marriage market!
        </CardDescription>
      </CardHeader>
      
      <MarqueeText 
        text={marketSentiment} 
        className="bg-black text-yellow-400 py-1 font-bold text-xs" 
      />
      
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y divide-dashed divide-gray-300">
          {/* Market stocks */}
          <div className="p-4">
            <h3 className="font-bold text-center mb-4">📊 TOP RISHTA STOCKS 📊</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stocks.map((stock) => (
                <div 
                  key={stock.id} 
                  className="border rounded p-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <div className="font-bold">{stock.profession}</div>
                    <div className="text-xs text-gray-600">{stock.description}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-doordarshan-primary">{Math.round(stock.value)}</div>
                    <div className="flex items-center justify-end">
                      {getTrendIcon(stock.trend)}
                      <span className={`text-xs ${getChangeColor(stock.change)}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Market news */}
          <div className="p-4 bg-gray-50">
            <h3 className="font-bold text-center mb-4">📰 SHAADI MARKET NEWS 📰</h3>
            
            <div className="space-y-3">
              {selectedNews.map((news) => (
                <div 
                  key={news.id} 
                  className={`p-3 rounded border-l-4 ${
                    news.impact === 'positive' 
                      ? 'border-green-500 bg-green-50' 
                      : news.impact === 'negative'
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-500 bg-gray-100'
                  }`}
                >
                  {news.headline}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-100 text-xs text-center">
        <p className="w-full">
          Disclaimer: This market index is 100% fictional and satirizes regressive matchmaking practices.
        </p>
      </CardFooter>
    </Card>
  );
};

export default RishtaMarket;
