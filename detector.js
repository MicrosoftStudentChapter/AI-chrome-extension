if (typeof HUGGINGFACE_API_KEY === "undefined") {
  console.error("API key not found. Make sure config.js is loaded before detector.js.");
}

async function fetchWithRetry(url, options, retries = 1) {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (retries > 0) {
      console.warn("Retrying fetch due to error:", err.message);
      return await fetchWithRetry(url, options, retries - 1);
    }
    throw err;
  }
}

async function detectAIWithML(text) {
  try {
    const apiUrl = "https://api-inference.huggingface.co/models/openai-community/roberta-base-openai-detector";

    const response = await fetchWithRetry(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: text.slice(0, 1000),
        parameters: { truncation: true }
      })
    });

    const result = await response.json();
    console.log("Full API Response:", JSON.stringify(result, null, 2));

    if (Array.isArray(result) && Array.isArray(result[0])) {
      const predictions = result[0];

      const fakeScore = predictions.find(p => p.label === "Fake")?.score ?? 0;
      const realScore = predictions.find(p => p.label === "Real")?.score ?? 0;

      const score = (fakeScore * 100).toFixed(1);
      const real = (realScore * 100).toFixed(1);

      return fakeScore > realScore
        ? `⚠️ AI-Generated content detected (Confidence: ${score}%)`
        : `✅ Human-written content (Confidence: ${real}%)`;
    }

    if (result.error) {
      console.error("API Error:", result.error);
      return "Detection failed: " + result.error;
    }

    return "Unexpected API response format";

  } catch (err) {
    if (err.name === "TypeError") {
      console.warn("Network or CORS issue, failed to fetch:", err.message);
      return "Couldn't connect to the detection server. Try again.";
    } else {
      console.error("Unexpected Error:", err);
      return "Unknown error occurred.";
    }
  }
}

(async () => {
  const text = document.body.innerText || "";
  console.log("Scanning page text for AI content...");

  const result = await detectAIWithML(text);
  console.log("Detection Result:", result);
})();