
export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    points: number;
    tooltip?: string;
  }[];
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "How many rotis can the bride make in one hour?",
    options: [
      { id: "1a", text: "Less than 10", points: -5, tooltip: "Clearly not wife material!" },
      { id: "1b", text: "10-20", points: 0, tooltip: "Barely acceptable" },
      { id: "1c", text: "20-30", points: 5, tooltip: "Now we're talking!" },
      { id: "1d", text: "30+", points: 10, tooltip: "Perfect! Masterchef material!" }
    ]
  },
  {
    id: 2,
    text: "How many relatives does the groom have in foreign countries?",
    options: [
      { id: "2a", text: "None", points: -10, tooltip: "No visa possibilities? NEXT!" },
      { id: "2b", text: "A few cousins", points: 0, tooltip: "At least there's hope" },
      { id: "2c", text: "Uncle in US/Canada", points: 10, tooltip: "+5 for Canada visa!" },
      { id: "2d", text: "Entire family abroad", points: 20, tooltip: "Green card jackpot!" }
    ]
  },
  {
    id: 3,
    text: "How many times does the bride/groom touch their parents' feet in a day?",
    options: [
      { id: "3a", text: "Never", points: -15, tooltip: "Western influence! Red flag!" },
      { id: "3b", text: "Only on festivals", points: 0, tooltip: "Modern but acceptable" },
      { id: "3c", text: "Morning and evening", points: 10, tooltip: "Good sanskaar" },
      { id: "3d", text: "Every hour, on the hour", points: 15, tooltip: "Sanskaari jackpot!" }
    ]
  },
  {
    id: 4,
    text: "What's your stance on paneer?",
    options: [
      { id: "4a", text: "I don't like it", points: -10, tooltip: "-10 for not liking paneer!" },
      { id: "4b", text: "It's okay", points: 0, tooltip: "Barely acceptable" },
      { id: "4c", text: "Love it!", points: 5, tooltip: "As any true Indian should!" },
      { id: "4d", text: "I make the best paneer dishes", points: 15, tooltip: "Marriage material!" }
    ]
  },
  {
    id: 5,
    text: "How do you feel about joint families?",
    options: [
      { id: "5a", text: "Prefer living separately", points: -15, tooltip: "Western mindset! Shame!" },
      { id: "5b", text: "Visit on weekends", points: 0, tooltip: "Compromise material" },
      { id: "5c", text: "Happy to live together", points: 10, tooltip: "Good family values" },
      { id: "5d", text: "The more the merrier!", points: 20, tooltip: "Perfect daughter/son-in-law!" }
    ]
  }
];

export const getQuizResult = (points: number): string => {
  if (points < 0) {
    return "Highly Unsanskari! May Alok Nath ji have mercy on your soul.";
  } else if (points < 20) {
    return "Somewhat Sanskari. You need more bhartiya values and less Netflix.";
  } else if (points < 40) {
    return "Acceptably Sanskari. Your parents will be somewhat proud.";
  } else if (points < 60) {
    return "Very Sanskari! Mothers-in-law will fight over you!";
  } else {
    return "ULTRA SANSKARI! You are the dream candidate every Indian parent prays for!";
  }
};
