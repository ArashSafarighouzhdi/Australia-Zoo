const mammals = [
  {
    id: "echidna",
    name: "Echidna",
    image: "./images/mammal/image1.png",
    group: "Mammal",
    lifespan: "50 years",
    food: "insects such as ants and termites, beetle larvae and worms",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    length: "76 cm",
    weight: "10 kg",
    found: "Throughout Australia"
  },
  {
    id: "tasmanian-devil",
    name: "Tasmanian Devil",
    image: "./images/mammal/image2.png",
    group: "Mammal",
    lifespan: "5 years",
    food: "Predator; they eat meat from other animals such as wallabies and wombats",
    description:
      "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    length: "70 cm",
    weight: "10 kg",
    found: "Tasmania"
  },
  {
    id: "quokka",
    name: "Quokka",
    image: "./images/mammal/image3.png",
    group: "Mammal",
    lifespan: "10 years",
    food: "Plant eaters; they munch on shrubs and grasses",
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer Willem de Vlamingh as a kind of rat as big as a common cat. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest (rat nest) in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    length: "50 cm",
    weight: "3 kg",
    found: "Only found on Rottnest Island and a few places on mainland Western Australia"
  }
];


const linkTextToId = {};
mammals.forEach(animal => (linkTextToId[animal.name] = animal.id));

document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const panel = document.getElementById("animal-panel");

 
  const defaultPanelHtml = `
    <h2 class="group-intro-title">Meet Australia's Marvelous Mammals</h2>
    <p class="group-intro-text">
      Warm-blooded, fur-covered, and full of character — Australian mammals come in all
      shapes and sizes. Learn how these fascinating animals nurture their young and
      survive in one of the most diverse ecosystems on Earth.
    </p>
  `;
  panel.innerHTML = defaultPanelHtml;

  
  function truncate(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "…";
  }


  function showShortSummary(animal) {
    panel.innerHTML = `
      <article class="animal-card">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p class="animal-line">group: ${animal.group}</p>
          <p class="animal-line">food: ${animal.food}</p>
          <p class="animal-line">description: ${truncate(animal.description, 220)}</p>
          <button type="button" class="read-more-btn">Read more <span class="arrow">→</span></button>
        </div>
      </article>
    `;

    const btn = panel.querySelector(".read-more-btn");
    if (btn) {
      btn.addEventListener("click", () => showFullSummary(animal));
    }
  }


  function showFullSummary(animal) {
    panel.innerHTML = `
      <article class="animal-card animal-card-full">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p class="animal-line">group: ${animal.group}</p>
          <p class="animal-line">lifespan: ${animal.lifespan}</p>
          <p class="animal-line">food: ${animal.food}</p>
          <p class="animal-line">description: ${animal.description}</p>
          <p class="animal-line">length: ${animal.length}</p>
          <p class="animal-line">weight: ${animal.weight}</p>
          <p class="animal-line">Found: ${animal.found}</p>
        </div>
      </article>
    `;
  }

  
  sidebarLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const isActive = link.classList.contains("active");
      sidebarLinks.forEach(l => l.classList.remove("active"));

      if (isActive) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      link.classList.add("active");
      const animalId = linkTextToId[link.textContent];
      const animal = mammals.find(a => a.id === animalId);

      if (!animal) {
        panel.innerHTML = defaultPanelHtml;
        return;
      }

      showShortSummary(animal);
    });
  });
});
