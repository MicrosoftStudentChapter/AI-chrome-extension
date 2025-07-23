# AI-chrome-extension

**Files & Structure**

-> manifest.json – Defines extension details and permissions.
-> content.js – Extracts text from webpages.
-> detector.js – Sends text to Hugging Face ML model and handles detection.
-> style.css – Styles the detection result banner.
-> icon16.png, icon48.png, icon128.png – Extension icons.

**How It Works**

-> When any webpage loads, content.js gets injected automatically.
-> It collects all visible text from the page.
-> Text is sent to detectAIWithML() in detector.js.
-> The function calls Hugging Face’s roberta-base-openai-detector via API.
-> Based on ML results (Fake vs Real), a banner is shown on the page.
-> Styling of the banner is handled using style.css.