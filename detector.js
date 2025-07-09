function detectAIContent(text) {
  const aiIndicators = [
    "as an ai language model",
    "in conclusion",
    "furthermore",
    "overall",
    "therefore",
    "thus",
    "to summarize",
    "this article discusses",
    "on the other hand",
    "in addition",
    "additionally"
  ];

  const lowerText = text.toLowerCase();
  let score = 0;

  aiIndicators.forEach(phrase => {
    if (lowerText.includes(phrase)) {
      score++;
    }
  });

  return score >= 3
    ? "⚠️ Possibly AI-generated content detected"
    : "✅ Content looks human-written";
}