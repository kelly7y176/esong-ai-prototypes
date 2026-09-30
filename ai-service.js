// ai-service.js - Hugging Face Real AI Integration Service

const AI_SERVICE = {
  // Hugging Face Free Inference API Endpoint
  // Defaulting to FLUX.1-schnell or SDXL Turbo for ultra-fast generation
  hfModelUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",

  /**
   * Generates a real AI image based on user prompt.
   * @param {string} prompt - The user prompt text.
   * @param {string} apiToken - Optional Hugging Face API Token (hf_xxx).
   * @returns {Promise<string>} Image URL (Data URL or Object URL)
   */
  async generateImage(prompt, apiToken = "") {
    // Clean prompt
    const sanitizedPrompt = prompt.trim() || "cyberpunk city at night with neon lights";

    // If HF API Token is provided, call Hugging Face Inference API directly
    if (apiToken && apiToken.startsWith("hf_")) {
      try {
        const response = await fetch(this.hfModelUrl, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ inputs: sanitizedPrompt })
        });

        if (!response.ok) {
          throw new Error(`HF API error: ${response.status}`);
        }

        const blob = await response.blob();
        return URL.createObjectURL(blob);
      } catch (err) {
        console.warn("Hugging Face API Call failed, falling back to open AI rendering engine:", err);
      }
    }

    // Fallback zero-config Real AI Generation Engine (Pollinations HuggingFace Gateway)
    // 100% Free, No token required, produces real AI Stable Diffusion/FLUX output!
    const seed = Math.floor(Math.random() * 100000);
    const encodedPrompt = encodeURIComponent(sanitizedPrompt);
    return `https://pollinations.ai/p/${encodedPrompt}?width=800&height=450&seed=${seed}&nologo=true`;
  }
};
