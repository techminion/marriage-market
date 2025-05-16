
// Mock data for Rishta Market Index

export interface RishtaStock {
  id: string;
  profession: string;
  trend: "up" | "down" | "stable";
  value: number;
  change: number;
  icon?: string;
  description: string;
}

export const rishtaStocks: RishtaStock[] = [
  {
    id: "gov-job",
    profession: "Government Employee",
    trend: "up",
    value: 845,
    change: 12.3,
    description: "Stable career, pension plan, guaranteed holidays on festivals!"
  },
  {
    id: "it-prof",
    profession: "IT Professional",
    trend: "down",
    value: 762,
    change: -5.8,
    description: "Too many layoffs lately. But green card prospects keep value high!"
  },
  {
    id: "doctor",
    profession: "Doctor",
    trend: "up",
    value: 978,
    change: 8.4,
    description: "Pandemic raised stocks! Plus, free healthcare for in-laws!"
  },
  {
    id: "mba-fin",
    profession: "MBA Finance",
    trend: "stable",
    value: 675,
    change: 0.2,
    description: "Good salary but too busy to attend family functions. Mixed reviews!"
  },
  {
    id: "startup",
    profession: "Startup Founder",
    trend: "up",
    value: 590,
    change: 45.7,
    description: "High risk, high return! 'Beta funding mil gayi toh setteled hai!'"
  },
  {
    id: "engineer",
    profession: "Engineer",
    trend: "down",
    value: 450,
    change: -2.3,
    description: "Market saturated! Unless from IIT, then add 200 points."
  },
  {
    id: "ca-prof",
    profession: "CA",
    trend: "up",
    value: 810,
    change: 6.7,
    description: "Tax saving expertise very valuable in Indian households!"
  },
  {
    id: "artist",
    profession: "Artist/Creator",
    trend: "down",
    value: 320,
    change: -18.9,
    description: "'Real job kab loge?' syndrome keeps values low despite talent."
  }
];

export interface MarketNews {
  id: number;
  headline: string;
  impact: "positive" | "negative" | "neutral";
}

export const marketNews: MarketNews[] = [
  {
    id: 1,
    headline: "Government announces 7th pay commission! Sarkari babus now hot property in marriage market!",
    impact: "positive"
  },
  {
    id: 2,
    headline: "Parents now accepting 'love marriage' if partner has foreign visa! Arranged market in SHAMBLES!",
    impact: "negative"
  },
  {
    id: 3,
    headline: "New study finds cooking skills no longer priority for grooms' families - Maggi cooking skills sufficient!",
    impact: "neutral"
  },
  {
    id: 4,
    headline: "Housing prices increase! Parents now prefer spouses who already own property!",
    impact: "negative"
  },
  {
    id: 5,
    headline: "Canada immigration rules tightened! Non-IT profession values surge as alternatives!",
    impact: "positive"
  }
];

export const getMarketSentiment = (): string => {
  const sentiments = [
    "Parents desperate as wedding season approaches! Market overwhelmed with DEMANDS!",
    "Manglik matches being offered at 20% discount this month only!",
    "Recession affecting dowry rates! Gold prices make parents delay weddings!",
    "Dating app usage up 45%! Traditional matchmakers FURIOUS!",
    "Foreign-returned candidates commanding premium prices in today's volatile market!"
  ];
  
  return sentiments[Math.floor(Math.random() * sentiments.length)];
};
