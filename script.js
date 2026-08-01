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
<h2>🌿 Analysis Report</h2>

<b>🌱 Plant:</b> Banana<br><br>

<b>🦠 Disease:</b> Leaf Spot<br><br>

<b>📊 Health:</b> 82% Healthy<br><br>

<b>💧 Water:</b> Water once every 2 days.<br><br>

<b>🌱 Fertilizer:</b> Organic Compost or Vermicompost.<br><br>

<b>☀️ Sunlight:</b> 6–8 hours daily.<br><br>

<b>💡 Advice:</b> Remove infected leaves and spray a suitable fungicide if the disease spreads.
`;
