const pageText = document.body.innerText || "";
console.log("🔍 Scanning page text for AI content...");
const result = detectAIContent(pageText);
console.log("Detection Result:", result);

const banner = document.createElement("div");
banner.innerText = result;
banner.className = "ai-detector-banner";
document.body.prepend(banner);