function Animal (name, group, food, description, length, weight, found, image) {
    this.name = name;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.image = image;
}

let cassowary = new Animal (
    "Cassowary", 
    "Bird",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
    "Queensland",
    "./images/birds/Cassowary.png"
);

let kookaburra = new Animal (
    "Kookaburra",
    "Bird",
    "Insects and small animals including snakes, frogs and lizards",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    "43 cm",
    "300 g",
    "Australia wide",
    "./images/birds/Kookaburra.png"
);

let yellowTailedBlackCockatoo = new Animal (
    "Yellow Tailed Black Cockatoo",
    "Bird",
    "Fruit, seeds and other plant material",
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.",
    "65 cm",
    "900 grams",
    "SE Australia",
    "./images/birds/Yellow Tailed Black Cockatoo.png"
);

const animals = [cassowary, kookaburra, yellowTailedBlackCockatoo];

let mainContent = document.querySelector(".content");

let groupTypeMessageHeading = document.createElement("h1");
groupTypeMessageHeading.textContent = `Australia's Feathered Treasures`;
mainContent.appendChild(groupTypeMessageHeading);

let groupTypeMessageIntro = document.createElement("p");
groupTypeMessageIntro.textContent = `From the laughing kookaburra to the striking yellow-tailed black cockatoo, Australia’s birds fill the skies with color and song.
These feathered wonders play a vital role in nature — spreading seeds, keeping balance, and brightening the wild with their calls.`;
mainContent.appendChild(groupTypeMessageIntro);

const sidebarContent = document.querySelector(".sidebar");
mainContent = document.querySelector(".content");

animals.forEach(animal => {
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

    const h2 = document.createElement("h2");
    h2.textContent = animal.name;

    const groupP = document.createElement("p");
    groupP.innerHTML = `<strong>Group:</strong> ${animal.group}`;

    const foodP = document.createElement("p");
    foodP.innerHTML = `<strong>Food:</strong> ${animal.food}`;

    details.append(h2, groupP, foodP);
    topSection.append(img, details);

    const description = document.createElement("p");
    description.classList.add("description", "collapsed");
    description.textContent = animal.description;

    const more = document.createElement("span");
    more.classList.add("more");

    more.innerHTML = `
        <br><br>
        <strong>Length:</strong> ${animal.length}
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
        button.textContent = "Show less";
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

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetClass = tab.textContent.toLowerCase().replaceAll(" ", "-");
        const match = document.querySelector(`.info.${targetClass}`);

        if (tab.classList.contains("active")) {
            allTabs.forEach(tab => tab.classList.remove("active"));
            contentDivs.forEach(content => content.classList.remove("active"));
            mainContent.classList.remove("hide-intro");
            return;
        }

        mainContent.classList.add("hide-intro");
        allTabs.forEach(tab => tab.classList.remove("active"));
        contentDivs.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");
        if (match) match.classList.add("active");
    });
});
