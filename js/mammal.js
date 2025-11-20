
function Animal(name, group, food, description, lifespan, length, weight, found, image) {
  this.name = name;
  this.group = group;
  this.food = food;
  this.description = description;
  this.lifespan = lifespan;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
}


let echidna = new Animal(
  "Echidna",
  "Mammal",
  "Insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
  "50 years",
  "76 cm",
  "10 kg",
  "Throughout Australia",
  "./images/mammal/image1.png"
);

let tasmanianDevil = new Animal(
  "Tasmanian Devil",
  "Mammal",
  "A predator, they eat meat from other animals such as wallabies and wombats",
  "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
  "5 years",
  "70 cm",
  "10 kg",
  "Tasmania",
  "./images/mammal/image2.png"
);

let quokka = new Animal(
  "Quokka",
  "Mammal",
  "Plant eaters, they munch on shrubs and grasses",
  "The Quokka (Setonix brachyurus) was described by early Dutch explorer Willem de Vlamingh as a kind of rat as big as a common cat. His first sighting of the quokka was on an island off the mouth of the Swan River. He named the island Rottenest (rat nest) in honour of this sighting. The island is now known as Rottnest Island. Essentially the quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  "10 years",
  "50 cm",
  "3 kg",
  "Only found on Rottnest Island and a few places on mainland Western Australia",
  "./images/mammal/image3.png"
);

const animals = [echidna, tasmanianDevil, quokka];


let mainContent = document.querySelector(".content");

let groupTypeMessageHeading = document.createElement("h1");
groupTypeMessageHeading.textContent = `Australia's Marvelous Mammals`;
mainContent.appendChild(groupTypeMessageHeading);

let groupTypeMessageIntro = document.createElement("p");
groupTypeMessageIntro.textContent = `Warm-blooded, fur-covered, and full of character — Australia’s mammals come in all shapes and sizes. From egg-laying echidnas to curious quokkas, these animals nurture their young in unique ways and survive in one of the most diverse ecosystems on Earth.`;
mainContent.appendChild(groupTypeMessageIntro);


const sidebarContent = document.querySelector(".sidebar");
mainContent = document.querySelector(".content");

animals.forEach((animal) => {
  
  const tab = document.createElement("a");
  tab.textContent = animal.name;
  tab.classList.add("sidebar-tab");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.appendChild(tab);
  sidebarContent.appendChild(wrapper);


  const className = animal.name.toLowerCase().replaceAll(" ", "-");
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info", className);

  const topSection = document.createElement("div");
  topSection.classList.add("top-section");

  const img = document.createElement("img");
  img.src = animal.image;
  img.alt = animal.name;

  const details = document.createElement("div");
  details.classList.add("animal-details");

  const nameH2 = document.createElement("h2");
  nameH2.textContent = animal.name;

  const groupP = document.createElement("p");
  groupP.innerHTML = `<strong>Group:</strong> ${animal.group}`;

  const foodP = document.createElement("p");
  foodP.innerHTML = `<strong>Food:</strong> ${animal.food}`;

  details.append(nameH2, groupP, foodP);
  topSection.append(img, details);

  const description = document.createElement("p");
  description.classList.add("description", "collapsed");
  description.textContent = animal.description;

  const more = document.createElement("span");
  more.classList.add("more");
  more.innerHTML = `
    <br><br>
    <strong>Lifespan:</strong> ${animal.lifespan}
    <br><strong>Length:</strong> ${animal.length}
    <br><strong>Weight:</strong> ${animal.weight}
    <br><strong>Found:</strong> ${animal.found}
  `;

  description.appendChild(more);

  const button = document.createElement("button");
  button.classList.add("read-more");
  button.textContent = "Read more";

  button.addEventListener("click", () => {
    if (description.classList.contains("collapsed")) {
      description.classList.remove("collapsed");
      button.textContent = "Back to Summary";
    } else {
      description.classList.add("collapsed");
      button.textContent = "Read more";
    }
  });

  infoDiv.append(topSection, description, button);
  mainContent.appendChild(infoDiv);
});


const allTabs = Array.from(document.querySelectorAll(".sidebar-tab"));
const contentDivs = Array.from(document.querySelectorAll(".info"));
mainContent = document.querySelector(".content");

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetClass = tab.textContent.toLowerCase().replaceAll(" ", "-");
    const match = document.querySelector(`.info.${targetClass}`);

    if (tab.classList.contains("active")) {
      allTabs.forEach((t) => t.classList.remove("active"));
      contentDivs.forEach((content) => content.classList.remove("active"));
      mainContent.classList.remove("hide-intro");
      return;
    }

    mainContent.classList.add("hide-intro");
    allTabs.forEach((t) => t.classList.remove("active"));
    contentDivs.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    if (match) match.classList.add("active");
  });
});
