const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const photo = document.getElementById("plantPhoto");
const preview = document.getElementById("preview");

photo.addEventListener("change", function() {

  const file = photo.files[0];

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }

});

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

Suggestion: Remove affected leaves and give proper care.
`;
});
