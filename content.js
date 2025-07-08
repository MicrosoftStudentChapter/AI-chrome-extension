const pageText = document.body.innerText || "";
console.log("🔍 Scanning page text for AI content...");
const result = detectAIContent(pageText);
console.log("Detection Result:", result);