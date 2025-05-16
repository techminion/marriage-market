
// Satirical dowry calculator logic

export interface DowryParams {
  education: string;
  profession: string;
  salary: number;
  height: number;
  skills: string[];
  familyBackground: string;
  location: string;
}

const EDUCATION_MULTIPLIERS: Record<string, number> = {
  "10th Pass": 0.5,
  "12th Pass": 0.7,
  "Bachelor's": 1.0,
  "Master's": 1.5,
  "PhD": 2.0,
  "IIT/IIM": 3.0
};

const PROFESSION_MULTIPLIERS: Record<string, number> = {
  "Government": 1.2,
  "Private": 1.0,
  "Doctor": 1.8,
  "Engineer": 1.5,
  "IT": 1.6,
  "Business": 1.3,
  "Abroad": 2.5
};

const LOCATION_MULTIPLIERS: Record<string, number> = {
  "Metro City": 1.5,
  "Tier 2 City": 1.2,
  "Small Town": 0.8,
  "Village": 0.6,
  "Foreign Country": 3.0
};

const FAMILY_BACKGROUND_MULTIPLIERS: Record<string, number> = {
  "Upper Class": 2.0,
  "Upper Middle Class": 1.5,
  "Middle Class": 1.0,
  "Lower Middle Class": 0.7,
  "Lower Class": 0.5
};

const SKILLS_POINTS: Record<string, number> = {
  "Cooking": 50000,
  "Singing": 30000,
  "Dancing": 40000,
  "Art/Craft": 20000,
  "Knows MS Excel": 100000,
};

// Base dowry amount (satirical)
const BASE_AMOUNT = 500000;

export const calculateDowry = (params: DowryParams): number => {
  const educationFactor = EDUCATION_MULTIPLIERS[params.education] || 1;
  const professionFactor = PROFESSION_MULTIPLIERS[params.profession] || 1;
  const locationFactor = LOCATION_MULTIPLIERS[params.location] || 1;
  const familyFactor = FAMILY_BACKGROUND_MULTIPLIERS[params.familyBackground] || 1;
  
  // Height bonus (satirical: taller = more dowry)
  const heightBonus = params.height > 180 ? 100000 : params.height > 170 ? 50000 : 0;
  
  // Salary factor
  const salaryFactor = (params.salary / 100000) * 50000;
  
  // Skills bonus
  const skillsBonus = params.skills.reduce((total, skill) => {
    return total + (SKILLS_POINTS[skill] || 0);
  }, 0);
  
  // Calculate total ridiculous dowry amount
  let totalDowry = BASE_AMOUNT * educationFactor * professionFactor * locationFactor * familyFactor;
  totalDowry += heightBonus + salaryFactor + skillsBonus;
  
  return Math.round(totalDowry);
};

// Utterly ridiculous dowry items (satirical)
export const getDowryItems = (amount: number): string[] => {
  const items = [];
  
  if (amount > 1000000) items.push("1 luxury car (minimum Honda City)");
  if (amount > 800000) items.push("42\" LCD TV with gold-plated remote");
  if (amount > 600000) items.push("Full set of kitchen appliances (must include pressure cooker)");
  if (amount > 400000) items.push("Branded furniture for entire house");
  if (amount > 300000) items.push("Latest iPhone for entire family");
  if (amount > 200000) items.push("Destination wedding at 5-star hotel");
  
  return items.length > 0 ? items : ["At least a scooter and a mixtie-grinder"];
};
