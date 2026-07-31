const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const photo = document.getElementById("plantPhoto");

button.addEventListener("click", function () {

  if (photo.files.length === 0) {
    result.innerHTML = "📷 ആദ്യം ഒരു ചെടിയുടെ ഫോട്ടോ തിരഞ്ഞെടുക്കുക.";
    return;
  }

  result.innerHTML = `
🤖 AI is analyzing your plant...

🌿 Demo Result

Plant: Banana

Disease: Leaf Spot

Suggestion: Spray suitable fungicide and remove infected leaves.
`;
});
