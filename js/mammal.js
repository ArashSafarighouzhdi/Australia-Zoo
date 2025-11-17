// List of mammals with their data
const mammals = [
  {
    id: "echidna",
    name: "Echidna",
    image: "./assets/images/mammal/image1.png",
    group: "Mammal",
    food: "insects such as ants and termites, beetle larvae and worms.",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often described as some of the most evolutionary distinct animals still alive today. They have downward-facing snouts and toothless jaws.",
    length: "30 cm",
    weight: "7 kg",
    found: "Throughout Australia"
  },
  {
    id: "tasmanian-devil",
    name: "Tasmanian Devil",
    image: "./assets/images/mammal/image2.png",
    group: "Mammal",
    food: "carnivorous; they can eat meat from mammals, birds, reptiles and insects.",
    description:
      "The Tasmanian devil is a stocky marsupial with black fur and a loud screech. It is mostly nocturnal and famous for its powerful jaws, which help it crush bones when feeding on carrion.",
    length: "Up to 65 cm",
    weight: "6–8 kg",
    found: "Tasmania"
  },
  {
    id: "quokka",
    name: "Quokka",
    image: "./assets/images/mammal/image3.png",
    group: "Mammal",
    food: "plant eaters, they munch on grasses, leaves and stems.",
    description:
      "The quokka is a small wallaby-like marsupial with a short face and round ears. It is mainly nocturnal and feeds on a variety of vegetation. Quokkas are famous for their friendly expression.",
    length: "40–54 cm",
    weight: "2.5–5 kg",
    found: "Rottnest Island and south-western Australia"
  }
];

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all sidebar links that have data-animal-id
  const sidebarLinks = document.querySelectorAll(".sidebar a[data-animal-id]");
  const panel = document.getElementById("animal-panel");

  // Default panel content when no animal is selected
  const defaultPanelHtml = `
    <h2 class="group-intro-title">Meet Australia's Marvelous Mammals</h2>
    <p class="group-intro-text">
      Warm-blooded, fur-covered, and full of character — Australian mammals come in all
      shapes and sizes. Learn how these fascinating animals nurture their young and
      survive in one of the most diverse ecosystems on Earth.
    </p>
  `;

  // Initialize panel with default content
  panel.innerHTML = defaultPanelHtml;

  // Function to truncate text to a specific length
  function truncate(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "…";
  }

  // Display short summary of the selected animal
  function showShortSummary(animal) {
    panel.innerHTML = `
      <article class="animal-card">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p class="animal-line">group: ${animal.group}</p>
          <p class="animal-line">food: ${animal.food}</p>
          <p class="animal-line">
            description: ${truncate(animal.description, 220)}
          </p>
          <button type="button" class="read-more-btn">
            Read more <span class="arrow">→</span>
          </button>
        </div>
      </article>
    `;

    // Add click event to "Read more" button to show full summary
    const btn = panel.querySelector(".read-more-btn");
    if (btn) {
      btn.addEventListener("click", () => showFullSummary(animal));
    }
  }

  // Display full summary of the selected animal
  function showFullSummary(animal) {
    panel.innerHTML = `
      <article class="animal-card animal-card-full">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p class="animal-line">group: ${animal.group}</p>
          <p class="animal-line">food: ${animal.food}</p>
          <p class="animal-line">description: ${animal.description}</p>
          <p class="animal-line">length: ${animal.length}</p>
          <p class="animal-line">weight: ${animal.weight}</p>
          <p class="animal-line">Found: ${animal.found}</p>
        </div>
      </article>
    `;
  }

  // Add click event to each sidebar link
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      const isAlreadyActive = link.classList.contains("active");

      // Remove active class from all links
      sidebarLinks.forEach((l) => l.classList.remove("active"));

      // If clicked link was already active, reset panel to default
      if (isAlreadyActive) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      // Add active class to clicked link
      link.classList.add("active");

      // Find the selected animal by id
      const animalId = link.dataset.animalId;
      const animal = mammals.find((a) => a.id === animalId);

      // If animal not found, show default panel
      if (!animal) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      // Show short summary for selected animal
      showShortSummary(animal);
    });
  });
});
