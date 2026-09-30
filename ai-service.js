// ai-service.js - Global Real AI Integration Service

const AI_SERVICE = {
  // Hugging Face FLUX.1 Inference Endpoint
  fluxModelUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",

  /**
   * Retrieves the stored Hugging Face Token from localStorage
   */
  getStoredToken() {
    return localStorage.getItem("ESONG_HF_TOKEN") || "";
  },

  /**
   * Saves or clears the Hugging Face Token in localStorage
   */
  setStoredToken(token) {
    if (token && token.trim()) {
      localStorage.setItem("ESONG_HF_TOKEN", token.trim());
    } else {
      localStorage.removeItem("ESONG_HF_TOKEN");
    }
  },

  /**
   * Real AI Image Generation Call
   * @param {string} prompt - Prompt string
   * @returns {Promise<string>} Image URL
   */
  async generateImage(prompt) {
    const sanitizedPrompt = prompt.trim() || "cyberpunk city at night with neon lights";
    const token = this.getStoredToken();

    // 1. If Hugging Face Token exists in localStorage, call HF API
    if (token && token.startsWith("hf_")) {
      try {
        const response = await fetch(this.fluxModelUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ inputs: sanitizedPrompt })
        });

        if (response.ok) {
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        }
      } catch (err) {
        console.warn("Hugging Face API call failed, switching to backup serverless gateway:", err);
      }
    }

    // 2. Backup Gateway (Zero-Config Serverless Real AI Engine - No Token Required)
    const seed = Math.floor(Math.random() * 1000000);
    const encodedPrompt = encodeURIComponent(sanitizedPrompt);
    return `https://pollinations.ai/p/${encodedPrompt}?width=800&height=450&seed=${seed}&nologo=true`;
  }
};
