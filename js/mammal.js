function Animal(
  name,
  lifespan,
  group,
  food,
  description,
  fullDescription,
  length,
  weight,
  found,
  image
) {
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


const mammals = [
  new Animal(
    "Echidna",
    "50 years",
    "Mammal",
    "Insects such as ants and termites, beetle larvae and worms",
    // short description
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs.",
    // full description
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "76 cm",
    "10 kg",
    "Throughout Australia",
    "./images/mammal/image1.png"
  ),

  new Animal(
    "Tasmanian Devil",
    "5 years",
    "Mammal",
    "They eat meat from other animals such as wallabies and wombats",
    "The Tasmanian devil is a stocky carnivorous marsupial with black fur, a loud screech, and very powerful jaws.",
    "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "70 cm",
    "10 kg",
    "Tasmania",
    "./images/mammal/image2.png"
  ),

  new Animal(
    "Quokka",
    "10 years",
    "Mammal",
    "Plant eaters, they munch on shrubs and grasses",
    "The quokka is a small wallaby-like marsupial known for its smiling, friendly appearance.",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer Willem de Vlamingh as a kind of rat as big as a common cat. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest (rat nest) in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "50 cm",
    "3 kg",
    "Only found on Rottnest Island and a few places on mainland Western Australia",
    "./images/mammal/image3.png"
  )
];


document.addEventListener("DOMContentLoaded", () => {

  const contentDiv = document.getElementById("animal-panel");
  const sidebarTabs = document.querySelectorAll(".sidebar .tab");

 
  if (!contentDiv || sidebarTabs.length === 0) return;

  function showWelcomeMessage() {
    contentDiv.innerHTML = `
      <div class="welcome-message">
        <h2 class="group-intro-title">Meet Australia's Marvelous Mammals</h2>
        <p class="group-intro-text">
          From egg-laying monotremes to powerful marsupials, Australia's mammals are
          full of surprises. Choose one from the left to learn more.
        </p>
      </div>
    `;
  }

  function showAnimalSummary(animal) {
    contentDiv.innerHTML = `
      <div class="animal-summary">
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
            <p><strong>Group:</strong> ${animal.group}</p>
            <p><strong>Food:</strong> ${animal.food}</p>
          </div>
        </div>

        <p class="long-description">${animal.fullDescription}</p>
        <p class="add-details"><strong>Lifespan:</strong> ${animal.lifespan}</p>
        <p class="add-details"><strong>Length:</strong> ${animal.length}</p>
        <p class="add-details"><strong>Weight:</strong> ${animal.weight}</p>
        <p class="add-details"><strong>Found:</strong> ${animal.found}</p>

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
        sidebarTabs.forEach((t) => t.classList.remove("active"));
        showWelcomeMessage();
        return;
      }

      sidebarTabs.forEach((t) => t.classList.remove("active"));
      clickedTab.classList.add("active");

      const animal = mammals.find(
        (a) => a.name.toLowerCase() === clickedName
      );

      if (animal) {
        showAnimalSummary(animal);
      } else {
        showWelcomeMessage();
      }
    });
  });


  showWelcomeMessage();
});
