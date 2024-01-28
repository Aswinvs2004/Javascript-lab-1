var availableNames = ["Max", "Alexander", "Das", "Evo", "Henry"];

function chooseRandomName() {
  var randomIndex = Math.floor(Math.random() * availableNames.length);
  return availableNames[randomIndex];
}

function craftRandomStory(inputName) {
  var RandomName = inputName.trim() !== "" ? inputName : chooseRandomName();
  var storyLine = "Long ago.... there was king named {name}, and he lived for like 400 years.";
  var createdNarrative = storyLine.replace("{name}", RandomName);
  return createdNarrative;
}

function presentGeneratedStory() {
  var inputtedName = document.getElementById("customName").value;
  var generatedNarrative = craftRandomStory(inputtedName);
  document.getElementById("storyParagraph").textContent = generatedNarrative;
}

document.getElementById("generateButton").addEventListener("click", presentGeneratedStory);