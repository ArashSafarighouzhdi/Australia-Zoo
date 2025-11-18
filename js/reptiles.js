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
      "If intimidation fails, the lizard turns around and runs with its frill raised, heading straight for the nearest tree.",
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
      "Its shell displays beautiful amber and brown patterns. Females weigh around 50 kg with an 80 cm shell.",
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
      "A shy reptile living in remote deserts. Important in Aboriginal culture and used as bush tucker.",
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
        <h2>Remarkable Reptiles of Australia</h2>
        <p>Meet the cool, clever, and sometimes sneaky reptiles of Australia!</p>
      </div>
    `;
  }

  function showAnimalSummary(animal) {
    contentDiv.innerHTML = `
      <div class="animal-summary">
        <h2>${animal.name}</h2>
        <div class="animal-info">
          <img src="${animal.image}" class="animal-image" alt="${animal.name}">
          <div class="details">
            <p><strong>Lifespan:</strong> ${animal.lifespan}</p>
            <p><strong>Group:</strong> ${animal.group}</p>
            <p><strong>Food:</strong> ${animal.food}</p>
            <p>${animal.description}</p>
            <button class="readMoreBtn">Read More</button>
          </div>
        </div>
      </div>
    `;

    document.querySelector(".readMoreBtn").addEventListener("click", () => {
      showFullSummary(animal);
    });
  }

  function showFullSummary(animal) {
    contentDiv.innerHTML = `
      <div class="animal-full">
        <h2>${animal.name}</h2>
        <div class="animal-info">
          <img src="${animal.image}" class="animal-image" alt="${animal.name}">
          <div class="details">
            <p><strong>Lifespan:</strong> ${animal.lifespan}</p>
            <p><strong>Group:</strong> ${animal.group}</p>
            <p><strong>Food:</strong> ${animal.food}</p>
            <p><strong>Length:</strong> ${animal.length}</p>
            <p><strong>Weight:</strong> ${animal.weight}</p>
            <p><strong>Found in:</strong> ${animal.found}</p>
            <p>${animal.fullDescription}</p>
            <button class="backBtn">Back to Summary</button>
          </div>
        </div>
      </div>
    `;

    document.querySelector(".backBtn").addEventListener("click", () => {
      showAnimalSummary(animal);
    });
  }

  // Sidebar click logic
  sidebarTabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
      const clickedTab = event.target;
      const clickedName = clickedTab.innerText.trim().toLowerCase();

      // toggle off if same item clicked again
      if (clickedTab.classList.contains("active")) {
        sidebarTabs.forEach(tabElement => tabElement.classList.remove("active"));
        showWelcomeMessage();
        return;
      }

      sidebarTabs.forEach(tabElement => tabElement.classList.remove("active"));
      clickedTab.classList.add("active");

      const animal = reptiles.find(animalElement => animalElement.name.toLowerCase() === clickedName);

      if (animal) showAnimalSummary(animal);
    });
  });

  showWelcomeMessage();