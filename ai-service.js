// ai-service.js - Shared Real AI Integration Service

const AI_SERVICE = {
  // Model Endpoints
  fluxModelUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
  sdxlModelUrl: "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",

  /**
   * Retrieves the user-configured HF Token from localStorage or input fallback
   */
  getStoredToken() {
    return localStorage.getItem("ESONG_HF_TOKEN") || "";
  },

  /**
   * Saves user configured HF Token to localStorage
   */
  setStoredToken(token) {
    if (token) {
      localStorage.setItem("ESONG_HF_TOKEN", token.trim());
    } else {
      localStorage.removeItem("ESONG_HF_TOKEN");
    }
  },

  /**
   * Real AI Image Generation Call
   */
  async generateImage(prompt, customToken = "") {
    const sanitizedPrompt = prompt.trim() || "cyberpunk city at night with neon lights";
    const token = customToken || this.getStoredToken();

    // 1. If Hugging Face Token exists, call official HF Inference API
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
        console.warn("Hugging Face API request failed, switching to backup gateway:", err);
      }
    }

    // 2. Backup Gateway (Zero-Config Pollinations AI Gateway - Real AI Output, No Token Needed)
    const seed = Math.floor(Math.random() * 1000000);
    const encodedPrompt = encodeURIComponent(sanitizedPrompt);
    return `https://pollinations.ai/p/${encodedPrompt}?width=800&height=450&seed=${seed}&nologo=true`;
  }
};
