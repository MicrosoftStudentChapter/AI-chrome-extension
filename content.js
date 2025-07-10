(async () => {
  const text = document.body.innerText || "";
  console.log("🔍 Scanning page text for AI content...");

  const result = await detectAIWithML(text);
  console.log("🧠 Detection Result:", result);

  const banner = document.createElement("div");
  banner.innerText = result;
  banner.className = "ai-detector-banner";
  document.body.prepend(banner);
})();