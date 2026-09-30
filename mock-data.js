// mock-data.js - Shared Mock Data for E-Song Prototypes

const MOCK_DATA = {
  samplePrompts: [
    "A cyberpunk city at night with neon lights and flying cars",
    "A peaceful bamboo forest with mist and sunset lighting",
    "A futuristic detective standing in a rainy alleyway",
    "An abstract fluid motion graphics background for tech promo"
  ],

  scenes: [
    {
      id: 1,
      title: "Scene 1: Neon Arrival",
      duration: 5,
      style: "Cyberpunk",
      image: "https://picsum.photos/seed/cyber1/800/450",
      description: "Wide aerial camera view sweeping into a dense neon-lit city at dusk."
    },
    {
      id: 2,
      title: "Scene 2: Alleyway Encounter",
      duration: 8,
      style: "Cyberpunk",
      image: "https://picsum.photos/seed/cyber2/800/450",
      description: "Medium shot of detective stepping out from shadowed alley into heavy rainfall."
    },
    {
      id: 3,
      title: "Scene 3: Hologram Reveal",
      duration: 6,
      style: "Sci-Fi",
      image: "https://picsum.photos/seed/cyber3/800/450",
      description: "Close-up shot on character activating a glowing 3D holographic interface."
    }
  ],

  characters: [
    {
      id: "char-1",
      name: "Futuristic Detective",
      avatar: "https://picsum.photos/seed/char1/200/200",
      style: "Cyberpunk",
      outfit: "Trench Coat & LED Visor",
      expression: "Determined"
    },
    {
      id: "char-2",
      name: "Fantasy Warrior",
      avatar: "https://picsum.photos/seed/char2/200/200",
      style: "Fantasy",
      outfit: "Rune Armor & Cape",
      expression: "Fierce"
    },
    {
      id: "char-3",
      name: "Casual Vlogger",
      avatar: "https://picsum.photos/seed/char3/200/200",
      style: "Realistic",
      outfit: "Hoodie & Wireless Headphones",
      expression: "Cheerful"
    }
  ],

  styles: ["Realistic", "Cyberpunk", "Anime/Cartoon", "3D Render", "Abstract"],
  cameraAngles: ["Wide Shot", "Medium Shot", "Close-up", "Bird's Eye", "Low Angle"],
  moods: ["Dramatic", "Energetic", "Melancholic", "Futuristic", "Calm"]
};
