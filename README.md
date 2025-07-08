# AI-chrome-extension

IDEA OF PROJECT:-
AI-Generated Content Detector (Chrome Extension)
A Chrome extension designed to detect AI-generated or biased content in articles, blogs, and social media.
It highlights such content for the user while browsing, ensuring greater awareness.
All analysis is performed locally on the user’s device, maintaining full privacy.

1, What is a Chrome Extension?
-> A Chrome Extension is like a **mini app** that you install in your Google Chrome browser to add extra features.


2, How do we install it?
a) From Chrome Web Store (Official Way)
--> The extension is published publicly--> Safe, verified, and easy for users--> You just click “Add to Chrome” — done! Example: Grammarly, ColorZilla, Dark Reader.

b) Load Unpacked Extension (Developer Mode)
--> This is how YOU will test your own extension. You can install an extension from your local files before uploading it to the store.
--> To install a Chrome extension manually, go to `chrome://extensions/`, turn on **Developer Mode** (top right), click **“Load Unpacked”**, and select the folder containing your extension files (with `manifest.json`). That’s it. 


3, What is the work flow?

ai-detector-extension/
├── manifest.json         ← Extension config + permissions
├── content.js            ← Injected into webpages to scan & process content
├── detector.js           ← (Optional) Contains AI/rule-based detection logic
├── style.css             ← For injected UI and highlights
└── icon.png              ← (Optional) Extension icon


4, why ?

📄 manifest.json
🔧 What it is:
This is the brain of the extension. It's a required config file that Chrome reads first to understand:

What your extension is called

What version it is

What files it uses (like content scripts)

What permissions it needs (like access to websites)

📌 Why it matters:
Without this, Chrome won’t even recognize your folder as an extension. It's like your passport for entering the Chrome browser world.

📄 content.js
🧠 What it is:
This file is automatically injected into every webpage you visit (if you tell Chrome to do so in manifest.json).

📌 Why it matters:
This is where you write code that:

Reads text from the page

Detects suspicious AI-generated or biased content

Highlights it visually

It’s the actual scanner brain of your extension.

📄 detector.js (Optional but useful)
🧪 What it is:
This contains your detection logic — either rule-based checks (like “too many fancy words”) or a small ML model (if you include one later).

📌 Why it matters:
We separate this from content.js to keep things clean. content.js just handles scraping and visuals — detector.js handles thinking 💭
You can use it like a smart assistant file that content.js calls for answers.

📄 style.css
🎨 What it is:
This file has all the styling for your highlights, buttons (if any), warning popups, etc.

📌 Why it matters:
Without CSS, your highlights will be ugly AF 😩
This is where you say: “Make suspicious text red with underline” or “Add a tooltip here.”

Keeps your extension ✨ aesthetic ✨

📄 icon.png (Optional but cute)
🖼️ What it is:
This is the icon that shows up:

In the Chrome toolbar (top right)

In the Extensions page

On the Chrome Web Store (if you ever publish it)

📌 Why it matters:
It’s optional, but it makes your extension look real and legit. Plus, you can flex your branding 😉


5,  Where does ML come in your AI Content Detector?
->In detector.js 


6, Making an extension and not a website because...?
->You're using a manifest.json
->You're loading it in chrome://extensions/
->Your JS runs as a content script on other sites
->It doesn’t live on the internet — it lives in the browser


7, Zerogpt or grammarly types??
-> grammarly 