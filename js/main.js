const sidebar_links = [
  { text: "Echidna" },
  { text: "Tasmanian Devil" },
  { text: "Quokka" },
  { text: "Frill-necked lizard" },
  { text: "Hawksbill Sea Turtle" },
  { text: "Perentie" },
  { text: "Cassowary" },
  { text: "Kookaburra" },
  { text: "Yellow Tailed Black Cockatoo" },
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

homepageInfoBox.innerHTML = `
  <h2 class="homepage_img_title">${homepage_content.siteTitle}</h2>
  <p class="homepage_desc">${homepage_content.siteDescription}</p>
`;

function goHome() {
  contentContainer.id = "";
  contentContainer.classList.add("home-bg");
  contentContainer.innerHTML = `
    <div class ="homepage_infobox">
      <h2 class="homepage_img_title">${homepage_content.siteTitle}</h2>
      <p class ="homepage_desc">${homepage_content.siteDescription}</p>
    </div>
  `;
  console.log("Navigated back to Home.");
}

// Truncate function
function truncate(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

function showSummary(animal) {
  contentPanel.innerHTML = `
      <article class="animal-card animal-card-full">
        <img src="${animal.image}" alt="${animal.name}">
        <div class="animal-body">
          <h2>${animal.name}</h2>
          <p><strong>Group:</strong> 
          <a href="${animal.group.toLowerCase()}s.html">${animal.group}</a>
          </p>
          <p class="animal-line"><strong>Food: </strong> ${animal.food}</p>
           <p class="animal-line"><strong>Description: </strong> ${truncate(
             animal.description,
             200
           )}</p>

          
          
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

// Track active sidebar link
let activeSidebarLink = null;

// Combine all data arrays into one master list
const birdAnimals = typeof birds !== "undefined" ? birds : [];
const reptileAnimals = typeof reptiles !== "undefined" ? reptiles : [];
const mammalAnimals = typeof mammals !== "undefined" ? mammals : [];
const allAnimals = [].concat(mammalAnimals, birdAnimals, reptileAnimals);
console.log(allAnimals);

sidebar_links.forEach((links) => {
  const sidebarLi = document.createElement("li");
  const sidebarLink = document.createElement("a");

  sidebarLink.textContent = links.text;
  sidebarLink.href = "#";
  sidebarLink.id = links.id;

  sidebarLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (activeSidebarLink === sidebarLink) {
      sidebarLink.classList.remove("active");
      activeSidebarLink = null;
      goHome();
      console.log("Clicked active link - returning to home");
      return;
    }

    if (activeSidebarLink) {
      activeSidebarLink.classList.remove("active");
    }

    sidebarLink.classList.add("active");
    activeSidebarLink = sidebarLink;

    contentContainer.id = "animal-panel";

    contentContainer.classList.remove("home-bg");
    homepageInfoBox.style.display = "none";

    // Find the animal in any group (case-insensitive, partial match)
    const linkTextLower = links.text.toLowerCase();
    const selectedAnimal = allAnimals.find((animal) =>
      animal.name.toLowerCase().includes(linkTextLower)
    );

    if (selectedAnimal) {
      showSummary(selectedAnimal);
      console.log("Displayed: " + selectedAnimal.name);
    }
  });

  sidebarLi.appendChild(sidebarLink);
  sidebar_list.appendChild(sidebarLi);
});
