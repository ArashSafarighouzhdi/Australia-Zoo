function Animal(name, lifespan, group, food, description, fullDescription, length, weight, found, image) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.fullDescription = fullDescription;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
}

const reptiles = [
  new Animal(
    "Frill-necked Lizard",
    "20 years",
    "Reptile",
    "Small insects and spiders",
    "When threatened, this lizard opens its yellow mouth, spreads its colorful frill, and hisses.",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    "1 kg",
    "Northern Australia",
    "./images/reptiles/frillneckedlizard.png"
  ),
  new Animal(
    "Hawksbill Sea Turtle",
    "50 years",
    "Reptile",
    "Sponges, jellyfish, sea plants",
    "Named for its sharp curved beak, similar to a hawk.",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird's beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80 cm",
    "50 kg",
    "Tropical coasts of Queensland, NT, WA",
    "./images/reptiles/hawksbillturtle.png"
  ),
  new Animal(
    "Perentie",
    "20 years",
    "Reptile",
    "Carnivore (kangaroos, rabbits, lizards, birds)",
    "Australia's largest monitor lizard.",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20 kg",
    "Deserts",
    "./images/reptiles/perentie.png"
  )
];

const sidebarTabs = document.querySelectorAll(".sidebar .tab");
const contentDiv = document.querySelector(".content");

function showWelcomeMessage() {
  contentDiv.innerHTML = `
      <div class="welcome-message">
        <h2 class="group-intro-title">Remarkable Reptiles of Australia</h2>
        <p class="group-intro-text">Meet the cool, clever, and sometimes sneaky reptiles of Australia! Whether they crawl, slither, or swim, these amazing animals remind us how wild and wonderful nature can be.</p>
      </div>
    `;
}
//<p><strong>Lifespan:</strong> ${animal.lifespan}</p>//
// life span removed from short summary//
function showAnimalSummary(animal) {
  contentDiv.innerHTML = `
    <div class="animal-summary" id="animal-panel">
      

      <div class="animal-info">
        <img src="${animal.image}" class="animal-image" alt="${animal.name}">
        <div class="details">
          <h2>${animal.name}</h2>
           
          <p><strong>Group:</strong> ${animal.group}</p>
          <p><strong>Food:</strong> ${animal.food}</p>
        </div>
      </div>

      <p class="short-description">${animal.description}</p>
      <button class="readMoreBtn">Read More</button>
    </div>
  `;

  document.querySelector(".readMoreBtn").addEventListener("click", () => {
    showFullSummary(animal);
  });
}

function showFullSummary(animal) {
  contentDiv.innerHTML = `
    <div class="animal-full">

      <div class="animal-info">
        <img src="${animal.image}" class="animal-image" alt="${animal.name}">
        <div class="details">
          <h2>${animal.name}</h2>
          <p><strong>Lifespan:</strong> ${animal.lifespan}</p>
          <p><strong>Group:</strong> ${animal.group}</p>
          <p><strong>Food:</strong> ${animal.food}</p>
          <p><strong>Length:</strong> ${animal.length}</p>
          <p><strong>Weight:</strong> ${animal.weight}</p>
          <p><strong>Found in:</strong> ${animal.found}</p>
        </div>
      </div>

      <p class="long-description">${animal.fullDescription}</p>
      <button class="backBtn">Back to Summary</button>
    </div>
  `;

  document.querySelector(".backBtn").addEventListener("click", () => {
    showAnimalSummary(animal);
  });
}

sidebarTabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    const clickedTab = event.target;
    const clickedName = clickedTab.innerText.trim().toLowerCase();

    if (clickedTab.classList.contains("active")) {
      sidebarTabs.forEach((tabElement) =>
        tabElement.classList.remove("active")
      );
      showWelcomeMessage();
      return;
    }

    sidebarTabs.forEach((tabElement) => tabElement.classList.remove("active"));
    clickedTab.classList.add("active");

    const animal = reptiles.find(
      (animalElement) => animalElement.name.toLowerCase() === clickedName
    );

    if (animal) showAnimalSummary(animal);
  });
});

showWelcomeMessage();