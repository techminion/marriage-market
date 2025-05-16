
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="mb-4">
          <h3 className="text-xl font-retro text-retro-yellow mb-2">THE GREAT INDIAN MARRIAGE MARKET</h3>
          <p className="text-sm">
            A satirical app highlighting outdated marriage customs through humor and absurdity
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg">
          <h4 className="font-bold mb-2">IMPORTANT DISCLAIMER</h4>
          <p className="text-sm">
            This application is purely satirical and meant for entertainment purposes only. 
            We do not endorse dowry or any discriminatory marriage practices whatsoever. 
            In fact, dowry is illegal in India under the Dowry Prohibition Act, 1961.
            Our aim is to critique harmful practices through humor.
          </p>
        </div>
        
        <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
          <p>© 2025 Satirical Apps Inc. | No actual marriages were arranged during the making of this app.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
