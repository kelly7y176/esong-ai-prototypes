// ai-service.js - Pure Local High-Reliability Mock AI Engine (Zero Failure Rate)

const AI_SERVICE = {
  // Curated high-quality cinematic keyframe image bank
  curatedKeyframes: [
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", // Cyberpunk City
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80", // Anime Alley
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80", // Sci-Fi Landscape
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // Abstract Fluid
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80", // Neon Street
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80"  // Future Art
  ],

  getStoredToken() {
    return localStorage.getItem("ESONG_HF_TOKEN") || "";
  },

  setStoredToken(token) {
    if (token && token.trim()) {
      localStorage.setItem("ESONG_HF_TOKEN", token.trim());
    } else {
      localStorage.removeItem("ESONG_HF_TOKEN");
    }
  },

  /**
   * Generates a 100% reliable simulated keyframe image
   */
  async generateImage(prompt) {
    // Pick a random high-res image from curated pool
    const randomIndex = Math.floor(Math.random() * this.curatedKeyframes.length);
    const selectedUrl = this.curatedKeyframes[randomIndex];

    // Simulate realistic 600ms network AI rendering time
    await new Promise(resolve => setTimeout(resolve, 600));

    return selectedUrl;
  }
};
