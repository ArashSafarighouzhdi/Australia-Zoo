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
let sidebar_list = document.querySelector(".sidebar ul");

sidebar_links.forEach((links) => {
  const sidebartext = document.createElement("li");
  const sidebarLink = document.createElement("a");
  const sidebarId = links.id;

  sidebartext.textContent = links.text;
  sidebarLink.textContent = links.url;
  //sidebarLink.href = sidebarLink;

  sidebartext.appendChild(sidebarLink);
  sidebar_list.appendChild(sidebartext);
});
