
import React from 'react';
import Header from '@/components/Header';
import DowryCalculator from '@/components/DowryCalculator';
import SanskariQuiz from '@/components/SanskariQuiz';
import RishtaMarket from '@/components/RishtaMarket';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-8 px-4 max-w-4xl mx-auto w-full">
        <section className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-retro mb-4">Mock The "Market"!</h2>
            <p className="text-lg">
              Our satirical tools will make you laugh while highlighting the absurdity of treating 
              marriage like a business transaction. Swipe through our features below!
            </p>
          </div>
          
          <Tabs defaultValue="dowry" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="dowry" className="font-bold">💰 Dowry Calculator</TabsTrigger>
              <TabsTrigger value="quiz" className="font-bold">🏆 Sanskaari Quiz</TabsTrigger>
              <TabsTrigger value="market" className="font-bold">📊 Rishta Market</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dowry">
              <DowryCalculator />
            </TabsContent>
            
            <TabsContent value="quiz">
              <SanskariQuiz />
            </TabsContent>
            
            <TabsContent value="market">
              <RishtaMarket />
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-8">
          <div className="border-retro p-6 bg-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Why This App Exists</h2>
            <div className="space-y-4">
              <p>
                This satirical application was created to highlight and critique outdated marriage customs 
                through humor. By taking these practices to absurd extremes, we hope to spark conversations 
                about why they should remain in the past.
              </p>
              <p>
                Practices like dowry are not only illegal but harmful to society. Sometimes, pointing out 
                the absurdity through satire can be more effective than serious discourse alone.
              </p>
              <p className="font-bold">
                Remember: This is SATIRE. None of the calculations or metrics mean anything real!
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
