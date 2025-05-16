
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { calculateDowry, getDowryItems, DowryParams } from '@/utils/calculatorLogic';
import { playSound } from '@/utils/soundEffects';
import Sparkles from '@/components/decorative/Sparkles';

const DowryCalculator = () => {
  const [params, setParams] = useState<DowryParams>({
    education: "Bachelor's",
    profession: "IT",
    salary: 800000,
    height: 175,
    skills: [],
    familyBackground: "Middle Class",
    location: "Metro City"
  });
  
  const [result, setResult] = useState<number | null>(null);
  const [items, setItems] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  const handleCalculate = () => {
    playSound('CASH_REGISTER');
    
    const amount = calculateDowry(params);
    const dowryItems = getDowryItems(amount);
    
    setResult(amount);
    setItems(dowryItems);
    setShowResult(true);
  };

  const handleSkillToggle = (skill: string, checked: boolean) => {
    setParams(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
    
    playSound('CLICK');
  };

  return (
    <Card className="border-retro mb-8 bg-white relative overflow-hidden">
      <div className="absolute -right-8 top-8 transform rotate-45 bg-retro-red text-white text-xs font-bold py-1 px-12 z-10">
        SATIRE ONLY
      </div>
      
      <CardHeader className="bg-doordarshan-primary text-white">
        <CardTitle className="text-center text-2xl font-retro">
          Dowry Calculator 9000™
        </CardTitle>
        <CardDescription className="text-white text-center">
          Calculate the satirical "market value" based on ridiculous stereotypes!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {!showResult ? (
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="font-bold">Educational Qualification</label>
              <Select 
                defaultValue={params.education}
                onValueChange={(value) => setParams({...params, education: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select education" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10th Pass">10th Pass</SelectItem>
                  <SelectItem value="12th Pass">12th Pass</SelectItem>
                  <SelectItem value="Bachelor's">Bachelor's Degree</SelectItem>
                  <SelectItem value="Master's">Master's Degree</SelectItem>
                  <SelectItem value="PhD">PhD</SelectItem>
                  <SelectItem value="IIT/IIM">IIT/IIM Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold">Profession</label>
              <Select 
                defaultValue={params.profession}
                onValueChange={(value) => setParams({...params, profession: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select profession" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Government">Government Job</SelectItem>
                  <SelectItem value="Private">Private Job</SelectItem>
                  <SelectItem value="Doctor">Doctor</SelectItem>
                  <SelectItem value="Engineer">Engineer</SelectItem>
                  <SelectItem value="IT">IT Professional</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Abroad">Working Abroad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="font-bold">Annual Salary (₹)</label>
                <span className="font-bold">₹{params.salary.toLocaleString()}</span>
              </div>
              <Slider
                value={[params.salary]}
                min={300000}
                max={5000000}
                step={100000}
                onValueChange={(value) => setParams({...params, salary: value[0]})}
                className="py-4"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="font-bold">Height (cm)</label>
                <span>{params.height} cm</span>
              </div>
              <Slider
                value={[params.height]}
                min={150}
                max={200}
                step={1}
                onValueChange={(value) => setParams({...params, height: value[0]})}
                className="py-4"
              />
              <div className="text-xs italic text-gray-500 text-center">
                Because shallow stereotypes are ridiculous!
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold">Special Skills</label>
              <div className="grid grid-cols-2 gap-2">
                {["Cooking", "Singing", "Dancing", "Art/Craft", "Knows MS Excel"].map((skill) => (
                  <TooltipProvider key={skill}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`skill-${skill}`}
                            checked={params.skills.includes(skill)}
                            onCheckedChange={(checked) => handleSkillToggle(skill, checked === true)}
                          />
                          <label htmlFor={`skill-${skill}`} className="text-sm cursor-pointer">
                            {skill}
                          </label>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {skill === "Knows MS Excel" 
                          ? "Most valuable skill according to aunties!" 
                          : skill === "Cooking" 
                            ? "A must-have according to potential in-laws!"
                            : `${skill} shows culture!`}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold">Family Background</label>
              <Select 
                defaultValue={params.familyBackground}
                onValueChange={(value) => setParams({...params, familyBackground: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select background" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Upper Class">Upper Class</SelectItem>
                  <SelectItem value="Upper Middle Class">Upper Middle Class</SelectItem>
                  <SelectItem value="Middle Class">Middle Class</SelectItem>
                  <SelectItem value="Lower Middle Class">Lower Middle Class</SelectItem>
                  <SelectItem value="Lower Class">Lower Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold">Location</label>
              <Select 
                defaultValue={params.location}
                onValueChange={(value) => setParams({...params, location: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Metro City">Metro City</SelectItem>
                  <SelectItem value="Tier 2 City">Tier 2 City</SelectItem>
                  <SelectItem value="Small Town">Small Town</SelectItem>
                  <SelectItem value="Village">Village</SelectItem>
                  <SelectItem value="Foreign Country">Foreign Country</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              className="w-full font-bold text-lg btn-retro mt-6"
              variant="default" 
              onClick={handleCalculate}
            >
              Calculate Stereotypical Value
            </Button>
          </form>
        ) : (
          <Sparkles density={15} className="p-4">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-bold">
                Based on ridiculous stereotypes, your "value" is:
              </h3>
              
              <div className="text-4xl font-bold font-retro text-doordarshan-primary">
                ₹{result?.toLocaleString() || 0}/-
              </div>
              
              <div className="border-2 border-dashed border-gray-300 p-4 bg-gray-50">
                <h4 className="font-bold mb-2">Stereotypical Expectations:</h4>
                <ul className="text-left">
                  {items.map((item, index) => (
                    <li key={index} className="mb-1">
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-3 text-sm border border-yellow-300 rounded">
                <p className="font-bold">IMPORTANT REMINDER:</p>
                <p>This is SATIRE! Dowry is illegal in India and a harmful practice.</p>
                <p>This app aims to highlight the absurdity of such customs through humor.</p>
              </div>
              
              <Button
                onClick={() => {
                  setShowResult(false);
                  playSound('CLICK');
                }}
                className="btn-retro"
              >
                Calculate Again
              </Button>
            </div>
          </Sparkles>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-100 text-xs text-center">
        <p className="w-full">
          Disclaimer: All calculations based on outdated, ridiculous stereotypes that should be left in the past.
        </p>
      </CardFooter>
    </Card>
  );
};

export default DowryCalculator;
