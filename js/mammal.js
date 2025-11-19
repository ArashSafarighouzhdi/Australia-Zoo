// List of mammals with their data
const mammals = [
  {
    id: "echidna",
    name: "Echidna",
    image: "./images/mammal/image1.png",
    group: "Mammal",
    food: "insects such as ants and termites, beetle larvae and worms.",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often described as some of the most evolutionary distinct animals still alive today. They have downward-facing snouts and toothless jaws.",
    length: "30 cm",
    weight: "7 kg",
    found: "Throughout Australia",
  },
  {
    id: "tasmanian-devil",
    name: "Tasmanian Devil",
    image: "./images/mammal/image2.png",
    group: "Mammal",
    food: "carnivorous; they can eat meat from mammals, birds, reptiles and insects.",
    description:
      "The Tasmanian devil is a stocky marsupial with black fur and a loud screech. It is mostly nocturnal and famous for its powerful jaws, which help it crush bones when feeding on carrion.",
    length: "Up to 65 cm",
    weight: "6–8 kg",
    found: "Tasmania",
  },
  {
    id: "quokka",
    name: "Quokka",
    image: "./images/mammal/image3.png",
    group: "Mammal",
    food: "plant eaters, they munch on grasses, leaves and stems.",
    description:
      "The quokka is a small wallaby-like marsupial with a short face and round ears. It is mainly nocturnal and feeds on a variety of vegetation. Quokkas are famous for their friendly expression.",
    length: "40–54 cm",
    weight: "2.5–5 kg",
    found: "Rottnest Island and south-western Australia",
  },
];

// Map link text to animal id
const linkTextToId = {};
mammals.forEach((animal) => (linkTextToId[animal.name] = animal.id));

document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const panel = document.getElementById("animal-panel");

  // Default panel content
  const defaultPanelHtml = `
    <h2 class="group-intro-title">Meet Australia's Marvelous Mammals</h2>
    <p class="group-intro-text">
      Warm-blooded, fur-covered, and full of character — Australian mammals come in all
      shapes and sizes. Learn how these fascinating animals nurture their young and
      survive in one of the most diverse ecosystems on Earth.
    </p>
  `;
  panel.innerHTML = defaultPanelHtml;

  // Truncate function
  function truncate(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "…";
  }

  // Show short summary
  function showShortSummary(animal) {
    panel.innerHTML = `
      <article class="animal-card">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p class="animal-line">group: ${animal.group}</p>
          <p class="animal-line">food: ${animal.food}</p>
          <p class="animal-line">description: ${truncate(
            animal.description,
            220
          )}</p>
          <button type="button" class="read-more-btn">Read more <span class="arrow">→</span></button>
        </div>
      </article>
    `;

    const btn = panel.querySelector(".read-more-btn");
    if (btn) {
      btn.addEventListener("click", () => showFullSummary(animal));
    }
  }

  // Show full summary
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

  // Add click events to sidebar links
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = link.classList.contains("active");
      sidebarLinks.forEach((l) => l.classList.remove("active"));

      if (isActive) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      link.classList.add("active");
      const animalId = linkTextToId[link.textContent];
      const animal = mammals.find((a) => a.id === animalId);

      if (!animal) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      showShortSummary(animal);
    });
  });
});
