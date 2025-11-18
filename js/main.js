const sidebar_links = [
  { text: "Echidna", url: "", id: "echidnaLink" },
  { text: "Tasmanian Devil", url: "", id: "tasmaniandevilLink" },
  { text: "Quokka", url: "", id: "quokkaLink" },
  { text: "Frill-necked lizard", url: "", id: "frill-neckedlizardLink" },
  { text: "Hawksbill Turtle", url: "", id: "hawksbillturtleLink" },
  { text: "Perentie", url: "", id: "perentieLink" },
  { text: "Cassowary", url: "", id: "zassowaryLink" },
  { text: "Kookaburra", url: "", id: "kookaburraLink" },
  {
    text: "Yellow Tailed Black Cockatoo",
    url: "",
    id: "yellowtailedblackcockatooLink",
  },
];

const homepage_content = {
  siteTitle: 'Welcome to "Zooly" — where nature comes alive!',
  siteDescription: `Australia is home to some of the most fascinating creatures on Earth. Explore our mammals, birds, and reptiles
                      to learn about how they live, what they eat, and why they're so important to our ecosystem.
                      Select an animal from the sidebar to begin your journey through the wild!`,
};

let homepageContentTextTitle = document.querySelector(".homepage_infobox h2");
homepageContentTextTitle.textContent = homepage_content.siteTitle;

let homepageContentTextDescription = document.querySelector(
  ".homepage_infobox p"
);
homepageContentTextDescription.textContent = homepage_content.siteDescription;
let sidebar_list = document.querySelector(".sidebar ul");
const homepageInfoBox = document.querySelector(".homepage_infobox");
const contentContainer = document.querySelector(".container .content");
const contentPanel = contentContainer; 

document.addEventListener("DOMContentLoaded", () => {
  const defaultContentPanelHtml = `
    <h2 class="homepage_img_title">Welcome to "Zooly" — where nature comes alive!</h2>
    <p class="homepage_desc">
      Australia is home to some of the most fascinating creatures on Earth. Explore our mammals, birds, and reptiles
                      to learn about how they live, what they eat, and why they're so important to our ecosystem.
                      Select an animal from the sidebar to begin your journey through the wild!.
    </p>
  `;
  contentPanel.innerHTML = defaultContentPanelHtml;
});

function goHome() {
  contentContainer.id = "";
  contentContainer.style.backgroundImage = "";
  homepageInfoBox.style.display = "block";

  // Clear the content container and restore homepage layout
  contentContainer.innerHTML = `
    <div class ="homepage_infobox">
      <h2 class="homepage_img_title">${homepage_content.siteTitle}</h2>
      <p class ="homepage_desc">${homepage_content.siteDescription}</p>
    </div>
  `;

  console.log("Navigated back to Home.");
}
// Show short summary
function showShortSummary(animal) {
  contentPanel.innerHTML = `
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

  const btn = contentPanel.querySelector(".read-more-btn");
  if (btn) {
    btn.addEventListener("click", () => showFullSummary(animal));
  }
}

// Show full summary
function showFullSummary(animal) {
  contentPanel.innerHTML = `
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

const homeMenuButton = document.querySelector('a[href="./index.html"]');
if (homeMenuButton) {
  homeMenuButton.addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
  });
}

// Truncate function
function truncate(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

sidebar_links.forEach((links) => {
  const sidebarLi = document.createElement("li");
  const sidebarLink = document.createElement("a");

  sidebarLink.textContent = links.text;
  sidebarLink.href = "#";
  sidebarLink.id = links.id;

  let clickTimer = null;
  let clickCount = 0;

  sidebarLink.addEventListener("click", (event) => {
    event.preventDefault();
    clickCount++;

    if (clickCount === 1) {
      
      clickTimer = setTimeout(() => {
        contentContainer.id = "animal-panel";
        contentContainer.style.backgroundImage = "none";
        homepageInfoBox.style.display = "none";

        
        const selectedAnimal = mammals.find(
          (animal) => animal.name === links.text
        );

        if (selectedAnimal) {
          showShortSummary(selectedAnimal);
        }
        clickCount = 0;
      }); 
    } else if (clickCount === 2) {
      
      clearTimeout(clickTimer);
      goHome();
      clickCount = 0;
    }
  });

  sidebarLi.appendChild(sidebarLink);
  sidebar_list.appendChild(sidebarLi);
});
