
// Sound effect URLs
export const SOUNDS = {
  CASH_REGISTER: "https://assets.mixkit.co/active_storage/sfx/2648/2648-preview.mp3",
  BELL: "https://assets.mixkit.co/active_storage/sfx/1559/1559-preview.mp3",
  CLICK: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
  SUCCESS: "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3",
  FAIL: "https://assets.mixkit.co/active_storage/sfx/2954/2954-preview.mp3",
  DRAMATIC: "https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3"
};

// Sound effect player utility
export const playSound = (soundType: keyof typeof SOUNDS) => {
  const audio = new Audio(SOUNDS[soundType]);
  audio.volume = 0.3; // Lower volume to avoid being too intrusive
  audio.play().catch(error => {
    // Autoplay might be blocked by browsers
    console.log("Sound play blocked: ", error);
  });
};
